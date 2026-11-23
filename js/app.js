/**
 * app.js - SchemeSetu Frontend Application Logic
 * Conforms to MCA Mini Project Specifications (BMC-353)
 * Provides 3-step wizard navigation, validation, income-slider sync,
 * API communication with fallback rule engine, live search filtering, and result rendering.
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentStep: 1,
    totalSteps: 3,
    schemesChecked: 147,
    eligibleSchemes: [],
    cachedAllSchemes: null, // Cached for static/offline fallback
  };

  // DOM Elements
  const elements = {
    // Stepper
    stepItems: document.querySelectorAll('.step-item'),
    stepPanels: document.querySelectorAll('.step-panel'),
    wizardSection: document.getElementById('wizardSection'),
    resultsSection: document.getElementById('resultsSection'),
    
    // Form & Inputs
    form: document.getElementById('eligibilityForm'),
    ageInput: document.getElementById('age'),
    genderSelect: document.getElementById('gender'),
    categorySelect: document.getElementById('category'),
    occupationSelect: document.getElementById('occupation'),
    incomeInput: document.getElementById('income'),
    incomeSlider: document.getElementById('incomeSlider'),
    incomeDisplay: document.getElementById('incomeDisplay'),
    residencySelect: document.getElementById('residency'),
    bplCheckbox: document.getElementById('bpl'),
    ownsLandCheckbox: document.getElementById('owns_land'),

    // Buttons
    btnBack: document.getElementById('btnBack'),
    btnNext: document.getElementById('btnNext'),
    btnSubmit: document.getElementById('btnSubmit'),
    btnStartOver: document.getElementById('btnStartOver'),

    // Results & Search
    eligibleCountSpan: document.getElementById('eligibleCount'),
    totalCheckedCountSpan: document.getElementById('totalCheckedCount'),
    cardsGrid: document.getElementById('cardsGrid'),
    schemeSearch: document.getElementById('schemeSearch'),
    btnClearSearch: document.getElementById('btnClearSearch'),
    searchCounter: document.getElementById('searchCounter'),
    emptySearchNotice: document.getElementById('emptySearchNotice'),
    emptyProfileNotice: document.getElementById('emptyProfileNotice'),
  };

  // Currency Formatter
  const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  // Initialize
  function init() {
    setupEventListeners();
    updateIncomeDisplay(elements.incomeInput.value);
    updateWizardUI();
  }

  // Event Listeners
  function setupEventListeners() {
    // Navigation Buttons
    elements.btnNext.addEventListener('click', handleNextStep);
    elements.btnBack.addEventListener('click', handleBackStep);
    elements.form.addEventListener('submit', handleFormSubmit);
    elements.btnStartOver.addEventListener('click', resetWizard);

    // Income Sync (Dual-direction binding)
    elements.incomeSlider.addEventListener('input', (e) => {
      elements.incomeInput.value = e.target.value;
      updateIncomeDisplay(e.target.value);
      clearFieldError('income');
    });

    elements.incomeInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10) || 0;
      elements.incomeSlider.value = Math.min(val, 1000000);
      updateIncomeDisplay(val);
      clearFieldError('income');
    });

    // Clear validation errors on user input
    ['age', 'gender', 'category', 'occupation', 'residency'].forEach((fieldId) => {
      const el = document.getElementById(fieldId);
      if (el) {
        el.addEventListener('input', () => clearFieldError(fieldId));
        el.addEventListener('change', () => clearFieldError(fieldId));
      }
    });

    // Live Keyword Search
    elements.schemeSearch.addEventListener('input', handleLiveSearch);
    elements.btnClearSearch.addEventListener('click', () => {
      elements.schemeSearch.value = '';
      elements.btnClearSearch.classList.add('hidden');
      elements.schemeSearch.focus();
      handleLiveSearch();
    });

    // Keyboard navigation (Enter key on inputs)
    elements.form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        e.preventDefault();
        if (state.currentStep < state.totalSteps) {
          handleNextStep();
        } else {
          elements.form.requestSubmit();
        }
      }
    });
  }

  // Update Income Display Badge
  function updateIncomeDisplay(val) {
    const num = parseInt(val, 10) || 0;
    elements.incomeDisplay.textContent = currencyFormatter.format(num);
  }

  // Validation Logic per Step
  function validateCurrentStep() {
    let isValid = true;

    if (state.currentStep === 1) {
      // Age validation
      const ageVal = elements.ageInput.value.trim();
      const ageNum = parseInt(ageVal, 10);
      if (!ageVal || isNaN(ageNum)) {
        showFieldError('age', 'Please enter your age.');
        isValid = false;
      } else if (ageNum < 0 || ageNum > 120) {
        showFieldError('age', 'Please enter a valid age between 0 and 120.');
        isValid = false;
      } else {
        clearFieldError('age');
      }

      // Gender validation
      if (!elements.genderSelect.value) {
        showFieldError('gender', 'Please select your gender.');
        isValid = false;
      } else {
        clearFieldError('gender');
      }

      // Category validation
      if (!elements.categorySelect.value) {
        showFieldError('category', 'Please select your social category.');
        isValid = false;
      } else {
        clearFieldError('category');
      }
    } else if (state.currentStep === 2) {
      // Occupation validation
      if (!elements.occupationSelect.value) {
        showFieldError('occupation', 'Please select your occupation.');
        isValid = false;
      } else {
        clearFieldError('occupation');
      }

      // Income validation
      const incVal = elements.incomeInput.value.trim();
      const incNum = parseInt(incVal, 10);
      if (incVal === '' || isNaN(incNum) || incNum < 0) {
        showFieldError('income', 'Please enter a valid annual income.');
        isValid = false;
      } else {
        clearFieldError('income');
      }
    } else if (state.currentStep === 3) {
      // Residency validation
      if (!elements.residencySelect.value) {
        showFieldError('residency', 'Please select your residency type.');
        isValid = false;
      } else {
        clearFieldError('residency');
      }
    }

    // Auto-focus the first invalid field
    if (!isValid) {
      const firstInvalid = document.querySelector(`.step-panel[data-step="${state.currentStep}"] .field-error:not(:empty)`);
      if (firstInvalid) {
        const inputId = firstInvalid.id.replace('Error', '');
        const inputEl = document.getElementById(inputId);
        if (inputEl) inputEl.focus();
      }
    }

    return isValid;
  }

  function showFieldError(fieldId, msg) {
    const errorEl = document.getElementById(fieldId + 'Error');
    if (errorEl) {
      errorEl.textContent = msg;
    }
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
      inputEl.setAttribute('aria-invalid', 'true');
      inputEl.style.borderColor = '#dc2626';
    }
  }

  function clearFieldError(fieldId) {
    const errorEl = document.getElementById(fieldId + 'Error');
    if (errorEl) {
      errorEl.textContent = '';
    }
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
      inputEl.removeAttribute('aria-invalid');
      inputEl.style.borderColor = '';
    }
  }

  // Step Navigation
  function handleNextStep() {
    if (!validateCurrentStep()) return;

    if (state.currentStep < state.totalSteps) {
      state.currentStep++;
      updateWizardUI();
      focusFirstInputOfStep(state.currentStep);
    }
  }

  function handleBackStep() {
    if (state.currentStep > 1) {
      state.currentStep--;
      updateWizardUI();
      focusFirstInputOfStep(state.currentStep);
    }
  }

  function focusFirstInputOfStep(stepNum) {
    const panel = document.querySelector(`.step-panel[data-step="${stepNum}"]`);
    if (panel) {
      const firstInteractive = panel.querySelector('input:not([type="hidden"]), select');
      if (firstInteractive) {
        setTimeout(() => firstInteractive.focus(), 50);
      }
    }
  }

  // Update Stepper & Wizard Panels UI
  function updateWizardUI() {
    // Update Stepper indicators
    elements.stepItems.forEach((item) => {
      const stepIdx = parseInt(item.getAttribute('data-step-indicator'), 10);
      item.classList.remove('active', 'completed');
      item.removeAttribute('aria-current');

      if (stepIdx === state.currentStep) {
        item.classList.add('active');
        item.setAttribute('aria-current', 'step');
      } else if (stepIdx < state.currentStep) {
        item.classList.add('completed');
      }
    });

    // Update Panels
    elements.stepPanels.forEach((panel) => {
      const panelStep = parseInt(panel.getAttribute('data-step'), 10);
      if (panelStep === state.currentStep) {
        panel.removeAttribute('hidden');
        panel.classList.add('active');
      } else {
        panel.setAttribute('hidden', '');
        panel.classList.remove('active');
      }
    });

    // Update Buttons
    elements.btnBack.disabled = state.currentStep === 1;

    if (state.currentStep === state.totalSteps) {
      elements.btnNext.classList.add('hidden');
      elements.btnSubmit.classList.remove('hidden');
    } else {
      elements.btnNext.classList.remove('hidden');
      elements.btnSubmit.classList.add('hidden');
    }
  }

  // Form Submission & Rule Engine
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    // Collect profile data
    const userProfile = {
      age: parseInt(elements.ageInput.value, 10),
      gender: elements.genderSelect.value,
      category: elements.categorySelect.value,
      occupation: elements.occupationSelect.value,
      income: parseInt(elements.incomeInput.value, 10) || 0,
      residency: elements.residencySelect.value,
      bpl: elements.bplCheckbox.checked,
      owns_land: elements.ownsLandCheckbox.checked,
    };

    // Show loading indicator on submit button
    const originalBtnText = elements.btnSubmit.textContent;
    elements.btnSubmit.disabled = true;
    elements.btnSubmit.textContent = 'Evaluating schemes...';

    try {
      let data = null;

      // Attempt 1: Call PHP API
      try {
        const response = await fetch('api.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userProfile),
        });

        if (response.ok) {
          const contentType = response.headers.get('content-type') || '';
          if (contentType.includes('application/json')) {
            data = await response.json();
          }
        }
      } catch (networkErr) {
        console.warn('api.php request failed or PHP server unavailable. Using offline rule engine.', networkErr);
      }

      // Attempt 2: Fallback to local schemes.json evaluation
      if (!data || !Array.isArray(data.eligible)) {
        data = await evaluateOffline(userProfile);
      }

      // Display results
      renderResults(data);
    } catch (err) {
      console.error('Eligibility evaluation error:', err);
      alert('Unable to evaluate schemes. Please verify that schemes data is accessible.');
    } finally {
      elements.btnSubmit.disabled = false;
      elements.btnSubmit.textContent = originalBtnText;
    }
  }

  // Offline / Static Rule Engine
  async function evaluateOffline(user) {
    if (!state.cachedAllSchemes) {
      const resp = await fetch('schemes.json');
      state.cachedAllSchemes = await resp.json();
    }

    const schemes = state.cachedAllSchemes;
    const eligible = [];

    schemes.forEach((scheme) => {
      // 1. Age
      if (user.age < scheme.min_age || user.age > scheme.max_age) return;
      // 2. Gender
      if (scheme.gender !== 'Any' && scheme.gender.toLowerCase() !== user.gender.toLowerCase()) return;
      // 3. Category
      if (scheme.category !== 'Any' && scheme.category.toLowerCase() !== user.category.toLowerCase()) return;
      // 4. Occupation
      if (scheme.occupation !== 'Any' && scheme.occupation.toLowerCase() !== user.occupation.toLowerCase()) return;
      // 5. Income
      if (scheme.max_annual_income !== null && scheme.max_annual_income !== undefined && scheme.max_annual_income !== '') {
        if (user.income > parseInt(scheme.max_annual_income, 10)) return;
      }
      // 6. Residency
      if (scheme.residency !== 'Any' && scheme.residency.toLowerCase() !== user.residency.toLowerCase()) return;
      // 7. BPL
      if (parseInt(scheme.requires_bpl, 10) === 1 && !user.bpl) return;
      // 8. Land
      if (parseInt(scheme.requires_land, 10) === 1 && !user.owns_land) return;

      eligible.push({
        id: scheme.id,
        name: scheme.name,
        description: scheme.description,
        benefit: scheme.benefit,
        official_link: scheme.official_link,
      });
    });

    return {
      total_schemes_checked: schemes.length,
      eligible_count: eligible.length,
      eligible: eligible,
    };
  }

  // Render Results Section
  function renderResults(data) {
    state.eligibleSchemes = data.eligible || [];
    state.schemesChecked = data.total_schemes_checked || 147;

    elements.eligibleCountSpan.textContent = `${state.eligibleSchemes.length} schemes`;
    elements.totalCheckedCountSpan.textContent = state.schemesChecked;

    // Reset search
    elements.schemeSearch.value = '';
    elements.btnClearSearch.classList.add('hidden');
    elements.searchCounter.textContent = '';

    // Switch view
    elements.wizardSection.classList.add('hidden');
    elements.resultsSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render cards
    renderCards(state.eligibleSchemes);

    // Check empty profile state
    if (state.eligibleSchemes.length === 0) {
      elements.cardsGrid.classList.add('hidden');
      elements.emptyProfileNotice.classList.remove('hidden');
    } else {
      elements.cardsGrid.classList.remove('hidden');
      elements.emptyProfileNotice.classList.add('hidden');
    }
  }

  // Render Scheme Cards Grid
  function renderCards(schemesToRender) {
    elements.cardsGrid.innerHTML = '';

    if (schemesToRender.length === 0) {
      elements.emptySearchNotice.classList.remove('hidden');
      return;
    } else {
      elements.emptySearchNotice.classList.add('hidden');
    }

    const fragment = document.createDocumentFragment();

    schemesToRender.forEach((scheme) => {
      const card = document.createElement('article');
      card.className = 'scheme-card';

      const top = document.createElement('div');
      top.className = 'card-top';

      const title = document.createElement('h3');
      title.className = 'scheme-title';
      title.textContent = scheme.name;

      const desc = document.createElement('p');
      desc.className = 'scheme-desc';
      desc.textContent = scheme.description;

      top.appendChild(title);
      top.appendChild(desc);

      const benefitPill = document.createElement('div');
      benefitPill.className = 'card-benefit-pill';
      benefitPill.textContent = scheme.benefit;

      const bottom = document.createElement('div');
      bottom.className = 'card-bottom';

      const link = document.createElement('a');
      link.className = 'scheme-link';
      link.href = scheme.official_link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `Official portal &rarr;`;

      bottom.appendChild(link);

      card.appendChild(top);
      card.appendChild(benefitPill);
      card.appendChild(bottom);

      fragment.appendChild(card);
    });

    elements.cardsGrid.appendChild(fragment);
  }

  // Live Search Filtering
  function handleLiveSearch() {
    const query = elements.schemeSearch.value.trim().toLowerCase();

    if (query.length > 0) {
      elements.btnClearSearch.classList.remove('hidden');
    } else {
      elements.btnClearSearch.classList.add('hidden');
    }

    if (!query) {
      elements.searchCounter.textContent = '';
      renderCards(state.eligibleSchemes);
      return;
    }

    const filtered = state.eligibleSchemes.filter((scheme) => {
      const nameMatch = scheme.name.toLowerCase().includes(query);
      const descMatch = scheme.description.toLowerCase().includes(query);
      const benefitMatch = scheme.benefit.toLowerCase().includes(query);
      return nameMatch || descMatch || benefitMatch;
    });

    elements.searchCounter.textContent = `Showing ${filtered.length} of ${state.eligibleSchemes.length} eligible schemes`;
    renderCards(filtered);
  }

  // Reset Wizard to Step 1 ("Start over")
  function resetWizard() {
    state.currentStep = 1;
    elements.form.reset();

    // Default sample values
    elements.ageInput.value = '32';
    elements.genderSelect.value = '';
    elements.categorySelect.value = '';
    elements.occupationSelect.value = '';
    elements.incomeInput.value = '180000';
    elements.incomeSlider.value = '180000';
    elements.residencySelect.value = '';
    elements.bplCheckbox.checked = false;
    elements.ownsLandCheckbox.checked = false;

    updateIncomeDisplay(180000);

    // Clear all validation errors
    document.querySelectorAll('.field-error').forEach((el) => (el.textContent = ''));
    document.querySelectorAll('[aria-invalid]').forEach((el) => {
      el.removeAttribute('aria-invalid');
      el.style.borderColor = '';
    });

    // Switch view back to wizard
    elements.resultsSection.classList.add('hidden');
    elements.wizardSection.classList.remove('hidden');
    updateWizardUI();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => elements.ageInput.focus(), 100);
  }

  // Expose global controller for inline onclick handlers if needed
  window.SchemeApp = {
    resetWizard,
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
