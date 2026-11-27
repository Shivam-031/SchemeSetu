/**
 * app.js - SchemeSetu Official Portal Application Engine
 * Includes Multi-language (i18n), Accessibility controls,
 * 3-step Wizard Assessment, 147 Schemes Repository Explorer, and Live Search
 */

(function () {
  'use strict';

  // Application State
  const state = {
    currentLang: 'en',
    fontScale: 1.0,
    isHighContrast: false,
    currentStep: 1,
    totalSteps: 3,
    schemesChecked: 147,
    allSchemes: [],
    eligibleSchemes: [],
    directorySector: 'all',
    directorySearchQuery: '',
    directoryVisibleCount: 10,
    directoryPageSize: 10,
  };

  // DOM Elements Cache
  const elements = {
    // Accessibility & Language
    langSelect: document.getElementById('langSelect'),
    btnFontDecrease: document.getElementById('btnFontDecrease'),
    btnFontReset: document.getElementById('btnFontReset'),
    btnFontIncrease: document.getElementById('btnFontIncrease'),
    btnContrastToggle: document.getElementById('btnContrastToggle'),
    contrastModeLabel: document.getElementById('contrastModeLabel'),

    // Stepper & Panels
    stepNodes: document.querySelectorAll('.step-node'),
    stepPanels: document.querySelectorAll('.step-panel'),
    slideProgressFill: document.getElementById('slideProgressFill'),
    form: document.getElementById('eligibilityForm'),
    resultsSection: document.getElementById('resultsSection'),

    // Step 1 Inputs
    ageInput: document.getElementById('age'),
    genderSelect: document.getElementById('gender'),
    categorySelect: document.getElementById('category'),

    // Step 2 Inputs
    occupationSelect: document.getElementById('occupation'),
    incomeInput: document.getElementById('income'),
    incomeSlider: document.getElementById('incomeSlider'),
    incomeDisplay: document.getElementById('incomeDisplay'),

    // Step 3 Inputs
    residencySelect: document.getElementById('residency'),
    bplCheckbox: document.getElementById('bpl'),
    ownsLandCheckbox: document.getElementById('owns_land'),

    // Wizard Controls
    btnBack: document.getElementById('btnBack'),
    btnNext: document.getElementById('btnNext'),
    btnSubmit: document.getElementById('btnSubmit'),
    btnStartOver: document.getElementById('btnStartOver'),

    // Results & Search
    eligibleCountSpan: document.getElementById('eligibleCount'),
    cardsGrid: document.getElementById('cardsGrid'),
    schemeSearch: document.getElementById('schemeSearch'),
    btnClearSearch: document.getElementById('btnClearSearch'),
    searchCounter: document.getElementById('searchCounter'),
    emptySearchNotice: document.getElementById('emptySearchNotice'),
    emptyProfileNotice: document.getElementById('emptyProfileNotice'),

    // Schemes Directory
    directoryGrid: document.getElementById('directoryGrid'),
    directoryFilterTabs: document.querySelectorAll('#directoryFilterTabs .filter-tab-pill'),
    categoryExploreBtns: document.querySelectorAll('.category-card .cat-action-link'),
    directorySearch: document.getElementById('directorySearch'),
    btnClearDirectorySearch: document.getElementById('btnClearDirectorySearch'),
    directoryCounter: document.getElementById('directoryCounter'),
    directoryActiveSectorName: document.getElementById('directoryActiveSectorName'),
    emptyDirectoryNotice: document.getElementById('emptyDirectoryNotice'),
    btnResetDirFilters: document.getElementById('btnResetDirFilters'),
    directoryViewMoreDock: document.getElementById('directoryViewMoreDock'),
    btnDirectoryViewMore: document.getElementById('btnDirectoryViewMore'),
    btnDirectoryViewMoreText: document.getElementById('btnDirectoryViewMoreText'),
    directoryProgressText: document.getElementById('directoryProgressText'),
  };

  // Currency Formatter
  const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  // Initialization
  async function init() {
    setupAccessibilityControls();
    setupLanguageSelector();
    setupIncomeSync();
    setupWizardNavigation();
    setupSearchFiltering();
    setupDirectoryControls();

    // Load initial schemes dataset
    await loadSchemesData();

    // Populate directory (10 by default)
    renderDirectory();

    // Initial language application
    const savedLang = localStorage.getItem('schemesetu_lang') || 'en';
    switchLanguage(savedLang);

    // Initial income display
    updateIncomeDisplay(elements.incomeInput.value);
  }

  // Load 147 Schemes Data
  async function loadSchemesData() {
    try {
      const response = await fetch('schemes.json');
      if (response.ok) {
        state.allSchemes = await response.json();
      }
    } catch (e) {
      console.warn('Could not fetch schemes.json directly, fallback available.', e);
    }
  }

  // =========================================================================
  // 1. Accessibility & Font Resizing (GIGW Compliant)
  // =========================================================================
  function setupAccessibilityControls() {
    // Font Sizing
    elements.btnFontDecrease.addEventListener('click', () => {
      state.fontScale = Math.max(0.85, state.fontScale - 0.05);
      applyFontScale();
    });

    elements.btnFontReset.addEventListener('click', () => {
      state.fontScale = 1.0;
      applyFontScale();
    });

    elements.btnFontIncrease.addEventListener('click', () => {
      state.fontScale = Math.min(1.25, state.fontScale + 0.05);
      applyFontScale();
    });

    // High Contrast Mode Toggle
    elements.btnContrastToggle.addEventListener('click', () => {
      state.isHighContrast = !state.isHighContrast;
      document.body.classList.toggle('high-contrast', state.isHighContrast);
      elements.contrastModeLabel.textContent = state.isHighContrast
        ? (I18N[state.currentLang].contrastHigh || 'High Contrast')
        : (I18N[state.currentLang].contrastNormal || 'Standard');
    });
  }

  function applyFontScale() {
    document.documentElement.style.setProperty('--font-scale', state.fontScale.toString());
  }

  // =========================================================================
  // 2. Multi-Language (i18n) Engine
  // =========================================================================
  function setupLanguageSelector() {
    elements.langSelect.addEventListener('change', (e) => {
      switchLanguage(e.target.value);
    });
  }

  function switchLanguage(lang) {
    if (!window.I18N || !window.I18N[lang]) return;
    state.currentLang = lang;
    document.documentElement.lang = lang;
    elements.langSelect.value = lang;
    localStorage.setItem('schemesetu_lang', lang);

    const dict = window.I18N[lang];

    // 1. Translate all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 2. Translate Search Placeholders
    if (elements.schemeSearch && dict.searchPlaceholder) {
      elements.schemeSearch.placeholder = dict.searchPlaceholder;
    }
    if (elements.directorySearch && dict.directorySearchPlaceholder) {
      elements.directorySearch.placeholder = dict.directorySearchPlaceholder;
    }
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // 3. Re-render directory cards & view more pagination in selected language
    renderDirectory();

    // 4. If assessment results are visible, update labels
    if (!elements.resultsSection.classList.contains('hidden')) {
      elements.eligibleCountSpan.textContent = `${state.eligibleSchemes.length} ${dict.resultsHeadingSuffix || 'schemes'}`;
    }

    // 5. Update Wizard Slide UI and Button Text in current language
    updateWizardUI('forward');
  }

  // =========================================================================
  // 3. Income Dual Binding (Input & Range Slider)
  // =========================================================================
  function setupIncomeSync() {
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
  }

  function updateIncomeDisplay(val) {
    const num = parseInt(val, 10) || 0;
    elements.incomeDisplay.textContent = currencyFormatter.format(num);
  }

  // =========================================================================
  // 4. 3-Step Wizard Assessment Navigation & Validation
  // =========================================================================
  function setupWizardNavigation() {
    elements.btnNext.addEventListener('click', handleNextStep);
    elements.btnBack.addEventListener('click', handleBackStep);
    elements.form.addEventListener('submit', handleFormSubmit);
    elements.btnStartOver.addEventListener('click', resetWizard);

    // Clear validation error on field changes
    ['age', 'gender', 'category', 'occupation', 'residency'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => clearFieldError(id));
        el.addEventListener('change', () => clearFieldError(id));
      }
    });

    // Enter key handling
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

  function validateStep(stepNum) {
    let isValid = true;
    const isHi = state.currentLang === 'hi';

    if (stepNum === 1) {
      const ageVal = elements.ageInput.value.trim();
      const ageNum = parseInt(ageVal, 10);
      if (!ageVal || isNaN(ageNum)) {
        showFieldError('age', isHi ? 'कृपया अपनी वैध आयु दर्ज करें।' : 'Please enter your age in years.');
        isValid = false;
      } else if (ageNum < 0 || ageNum > 120) {
        showFieldError('age', isHi ? 'कृपया 0 से 120 के बीच आयु दर्ज करें।' : 'Age must be between 0 and 120.');
        isValid = false;
      } else {
        clearFieldError('age');
      }

      if (!elements.genderSelect.value) {
        showFieldError('gender', isHi ? 'कृपया लिंग का चयन करें।' : 'Please select your gender.');
        isValid = false;
      } else {
        clearFieldError('gender');
      }

      if (!elements.categorySelect.value) {
        showFieldError('category', isHi ? 'कृपया सामाजिक वर्ग का चयन करें।' : 'Please select your social category.');
        isValid = false;
      } else {
        clearFieldError('category');
      }
    } else if (stepNum === 2) {
      if (!elements.occupationSelect.value) {
        showFieldError('occupation', isHi ? 'कृपया मुख्य व्यवसाय चुनें।' : 'Please select your primary occupation.');
        isValid = false;
      } else {
        clearFieldError('occupation');
      }

      const incVal = elements.incomeInput.value.trim();
      const incNum = parseInt(incVal, 10);
      if (incVal === '' || isNaN(incNum) || incNum < 0) {
        showFieldError('income', isHi ? 'कृपया वैध वार्षिक पारिवारिक आय दर्ज करें।' : 'Please enter valid annual family income.');
        isValid = false;
      } else {
        clearFieldError('income');
      }
    } else if (stepNum === 3) {
      if (!elements.residencySelect.value) {
        showFieldError('residency', isHi ? 'कृपया निवास क्षेत्र (ग्रामीण/शहरी) चुनें।' : 'Please select your area of residence.');
        isValid = false;
      } else {
        clearFieldError('residency');
      }
    }

    if (!isValid) {
      const firstInvalid = document.querySelector(`.step-panel[data-step="${stepNum}"] .field-validation-msg:not(:empty)`);
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
    if (errorEl) errorEl.textContent = msg;
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
      inputEl.setAttribute('aria-invalid', 'true');
      inputEl.style.borderColor = 'var(--gov-error)';
    }
  }

  function clearFieldError(fieldId) {
    const errorEl = document.getElementById(fieldId + 'Error');
    if (errorEl) errorEl.textContent = '';
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
      inputEl.removeAttribute('aria-invalid');
      inputEl.style.borderColor = '';
    }
  }

  function handleNextStep() {
    if (!validateStep(state.currentStep)) return;
    if (state.currentStep < state.totalSteps) {
      state.currentStep++;
      updateWizardUI('forward');
      focusFirstInputOfStep(state.currentStep);
    }
  }

  function handleBackStep() {
    if (state.currentStep > 1) {
      state.currentStep--;
      updateWizardUI('backward');
      focusFirstInputOfStep(state.currentStep);
    }
  }

  function focusFirstInputOfStep(stepNum) {
    const panel = document.querySelector(`.step-panel[data-step="${stepNum}"]`);
    if (panel) {
      const input = panel.querySelector('input, select');
      if (input) setTimeout(() => input.focus(), 60);
    }
  }

  function updateWizardUI(direction = 'forward') {
    // 1. Update Progress Bar Meter
    const pct = Math.round((state.currentStep / state.totalSteps) * 100);
    if (elements.slideProgressFill) {
      elements.slideProgressFill.style.width = pct + '%';
      if (elements.slideProgressFill.parentElement) {
        elements.slideProgressFill.parentElement.setAttribute('aria-valuenow', pct.toString());
      }
    }

    // 2. Stepper node indicators
    elements.stepNodes.forEach((node) => {
      const stepIdx = parseInt(node.getAttribute('data-step-indicator'), 10);
      node.classList.remove('active', 'completed');
      node.removeAttribute('aria-current');

      if (stepIdx === state.currentStep) {
        node.classList.add('active');
        node.setAttribute('aria-current', 'step');
      } else if (stepIdx < state.currentStep) {
        node.classList.add('completed');
      }
    });

    // 3. Step panels (Slides) - strictly only display the active slide
    elements.stepPanels.forEach((panel) => {
      const panelStep = parseInt(panel.getAttribute('data-step'), 10);
      if (panelStep === state.currentStep) {
        panel.removeAttribute('hidden');
        panel.classList.remove('active', 'slide-backward');
        if (direction === 'backward') {
          panel.classList.add('slide-backward');
        }
        // Force reflow for fresh CSS animation replay
        void panel.offsetWidth;
        panel.classList.add('active');
      } else {
        panel.setAttribute('hidden', '');
        panel.classList.remove('active', 'slide-backward');
      }
    });

    // 4. Update Navigation Buttons contextually per slide
    const isHi = state.currentLang === 'hi';

    if (state.currentStep === 1) {
      elements.btnBack.disabled = true;
      elements.btnBack.textContent = isHi ? '← पिछला चरण' : '← Previous Step';
      elements.btnNext.classList.remove('hidden');
      elements.btnNext.textContent = isHi ? 'स्लाइड 2: वित्तीय विवरण भरें →' : 'Proceed to Slide 2: Financial Details →';
      elements.btnSubmit.classList.add('hidden');
    } else if (state.currentStep === 2) {
      elements.btnBack.disabled = false;
      elements.btnBack.textContent = isHi ? '← वापस स्लाइड 1 पर जाएं' : '← Back to Slide 1';
      elements.btnNext.classList.remove('hidden');
      elements.btnNext.textContent = isHi ? 'स्लाइड 3: निवास विवरण भरें →' : 'Proceed to Slide 3: Residency Details →';
      elements.btnSubmit.classList.add('hidden');
    } else if (state.currentStep === 3) {
      elements.btnBack.disabled = false;
      elements.btnBack.textContent = isHi ? '← वापस स्लाइड 2 पर जाएं' : '← Back to Slide 2';
      elements.btnNext.classList.add('hidden');
      elements.btnSubmit.classList.remove('hidden');
      elements.btnSubmit.textContent = isHi
        ? 'योजना पात्रता की गणना करें ✓'
        : 'Evaluate Scheme Eligibility ✓';
    }
  }

  // =========================================================================
  // 5. Evaluation Rule Engine & Result Presentation
  // =========================================================================
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!validateStep(state.currentStep)) return;

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

    const dict = window.I18N[state.currentLang] || window.I18N.en;
    const originalText = elements.btnSubmit.textContent;
    elements.btnSubmit.disabled = true;
    elements.btnSubmit.textContent = dict.btnEvaluating || 'Evaluating Schemes...';

    try {
      let data = null;

      // Attempt API Call
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
      } catch (err) {
        console.warn('api.php request unreachable, using embedded rule engine.', err);
      }

      // Offline / Static fallback
      if (!data || !Array.isArray(data.eligible)) {
        data = evaluateOffline(userProfile);
      }

      renderAssessmentResults(data);
    } catch (err) {
      console.error('Error during scheme evaluation:', err);
      alert('Unable to evaluate schemes. Please verify network access.');
    } finally {
      elements.btnSubmit.disabled = false;
      elements.btnSubmit.textContent = originalText;
    }
  }

  function evaluateOffline(user) {
    const eligible = [];
    state.allSchemes.forEach((scheme) => {
      // 1. Age
      if (user.age < scheme.min_age || user.age > scheme.max_age) return;
      // 2. Gender
      if (scheme.gender !== 'Any' && scheme.gender.toLowerCase() !== user.gender.toLowerCase()) return;
      // 3. Category
      if (scheme.category !== 'Any' && scheme.category.toLowerCase() !== user.category.toLowerCase()) return;
      // 4. Occupation
      if (scheme.occupation !== 'Any' && scheme.occupation.toLowerCase() !== user.occupation.toLowerCase()) return;
      // 5. Income Ceiling
      if (scheme.max_annual_income !== null && scheme.max_annual_income !== undefined && scheme.max_annual_income !== '') {
        if (user.income > parseInt(scheme.max_annual_income, 10)) return;
      }
      // 6. Residency
      if (scheme.residency !== 'Any' && scheme.residency.toLowerCase() !== user.residency.toLowerCase()) return;
      // 7. BPL requirement
      if (parseInt(scheme.requires_bpl, 10) === 1 && !user.bpl) return;
      // 8. Land ownership requirement
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
      total_schemes_checked: state.allSchemes.length || 147,
      eligible_count: eligible.length,
      eligible: eligible,
    };
  }

  function renderAssessmentResults(data) {
    state.eligibleSchemes = data.eligible || [];
    const dict = window.I18N[state.currentLang] || window.I18N.en;

    elements.eligibleCountSpan.textContent = `${state.eligibleSchemes.length} ${dict.resultsHeadingSuffix || 'schemes'}`;

    // Reset search bar
    elements.schemeSearch.value = '';
    elements.btnClearSearch.classList.add('hidden');
    elements.searchCounter.textContent = '';

    // Switch view
    elements.form.classList.add('hidden');
    elements.resultsSection.classList.remove('hidden');

    // Smooth scroll to results
    elements.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Render cards
    renderCardsToContainer(elements.cardsGrid, state.eligibleSchemes);

    // Empty state handling
    if (state.eligibleSchemes.length === 0) {
      elements.cardsGrid.classList.add('hidden');
      elements.emptyProfileNotice.classList.remove('hidden');
    } else {
      elements.cardsGrid.classList.remove('hidden');
      elements.emptyProfileNotice.classList.add('hidden');
    }
  }

  // Card Rendering Helper
  function renderCardsToContainer(container, schemesList) {
    container.innerHTML = '';
    const dict = window.I18N[state.currentLang] || window.I18N.en;

    if (schemesList.length === 0) {
      elements.emptySearchNotice.classList.remove('hidden');
      return;
    } else {
      elements.emptySearchNotice.classList.add('hidden');
    }

    const fragment = document.createDocumentFragment();

    schemesList.forEach((s) => {
      const card = document.createElement('article');
      card.className = 'official-scheme-card';

      card.innerHTML = `
        <div class="card-content-top">
          <span class="scheme-code-badge">GOI-SCHEME-${String(s.id).padStart(3, '0')}</span>
          <h4 class="card-scheme-name">${escapeHtml(s.name)}</h4>
          <p class="card-scheme-desc">${escapeHtml(s.description)}</p>
        </div>
        <div class="card-benefit-strip">
          <span class="benefit-strip-label">${dict.resultsCardBenefitTag || 'Verified Benefit Entitlement'}</span>
          <span class="benefit-strip-value">${escapeHtml(s.benefit)}</span>
        </div>
        <div class="card-footer-action">
          <a href="${escapeHtml(s.official_link)}" target="_blank" rel="noopener noreferrer" class="official-portal-link">
            ${dict.resultsOfficialLink || 'Visit Official Government Portal &rarr;'}
          </a>
        </div>
      `;

      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // =========================================================================
  // 6. Live Search Filtering
  // =========================================================================
  function setupSearchFiltering() {
    elements.schemeSearch.addEventListener('input', () => {
      const query = elements.schemeSearch.value.trim().toLowerCase();
      const dict = window.I18N[state.currentLang] || window.I18N.en;

      if (query.length > 0) {
        elements.btnClearSearch.classList.remove('hidden');
      } else {
        elements.btnClearSearch.classList.add('hidden');
      }

      if (!query) {
        elements.searchCounter.textContent = '';
        renderCardsToContainer(elements.cardsGrid, state.eligibleSchemes);
        return;
      }

      const filtered = state.eligibleSchemes.filter((s) => {
        return (
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.benefit.toLowerCase().includes(query)
        );
      });

      elements.searchCounter.textContent = state.currentLang === 'hi'
        ? `कुल ${state.eligibleSchemes.length} में से ${filtered.length} योजनाएं प्रदर्शित`
        : `Showing ${filtered.length} of ${state.eligibleSchemes.length} matching schemes`;

      renderCardsToContainer(elements.cardsGrid, filtered);
    });

    elements.btnClearSearch.addEventListener('click', () => {
      elements.schemeSearch.value = '';
      elements.btnClearSearch.classList.add('hidden');
      elements.searchCounter.textContent = '';
      elements.schemeSearch.focus();
      renderCardsToContainer(elements.cardsGrid, state.eligibleSchemes);
    });
  }

  // =========================================================================
  // 7. Complete Schemes Directory, Search & View More Pagination
  // =========================================================================
  function setupDirectoryControls() {
    // 1. Sector Filter Tabs
    elements.directoryFilterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        elements.directoryFilterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        state.directorySector = tab.getAttribute('data-sector') || 'all';

        // Update active sector name indicator badge
        if (elements.directoryActiveSectorName) {
          elements.directoryActiveSectorName.textContent = tab.textContent.trim();
        }

        // Reset visible count to 10 by default whenever sector changes
        state.directoryVisibleCount = state.directoryPageSize;
        renderDirectory();
      });
    });

    // 2. Category cards click-throughs from landing page
    elements.categoryExploreBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const sector = btn.getAttribute('data-filter');
        elements.directoryFilterTabs.forEach((t) => {
          if (t.getAttribute('data-sector') === sector) {
            t.click();
          }
        });
        document.getElementById('schemesDirectorySection').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // 3. Directory Search Input
    if (elements.directorySearch) {
      elements.directorySearch.addEventListener('input', () => {
        state.directorySearchQuery = elements.directorySearch.value.trim();

        if (state.directorySearchQuery.length > 0) {
          elements.btnClearDirectorySearch.classList.remove('hidden');
        } else {
          elements.btnClearDirectorySearch.classList.add('hidden');
        }

        // Reset visible count to 10 by default when searching
        state.directoryVisibleCount = state.directoryPageSize;
        renderDirectory();
      });
    }

    // 4. Clear Directory Search Button
    if (elements.btnClearDirectorySearch) {
      elements.btnClearDirectorySearch.addEventListener('click', () => {
        elements.directorySearch.value = '';
        state.directorySearchQuery = '';
        state.directoryVisibleCount = state.directoryPageSize;
        elements.btnClearDirectorySearch.classList.add('hidden');
        renderDirectory();
        elements.directorySearch.focus();
      });
    }

    // 5. Reset Filters Button (inside empty state notice)
    if (elements.btnResetDirFilters) {
      elements.btnResetDirFilters.addEventListener('click', () => {
        if (elements.directorySearch) elements.directorySearch.value = '';
        state.directorySearchQuery = '';
        if (elements.btnClearDirectorySearch) elements.btnClearDirectorySearch.classList.add('hidden');

        // Reset tabs to "all"
        elements.directoryFilterTabs.forEach((t) => {
          if (t.getAttribute('data-sector') === 'all') {
            t.classList.add('active');
            if (elements.directoryActiveSectorName) {
              elements.directoryActiveSectorName.textContent = t.textContent.trim();
            }
          } else {
            t.classList.remove('active');
          }
        });

        state.directorySector = 'all';
        state.directoryVisibleCount = state.directoryPageSize;
        renderDirectory();
      });
    }

    // 6. View More Button (Loads next 10 schemes)
    if (elements.btnDirectoryViewMore) {
      elements.btnDirectoryViewMore.addEventListener('click', () => {
        state.directoryVisibleCount += state.directoryPageSize;
        renderDirectory();
      });
    }
  }

  function getFilteredDirectorySchemes() {
    let list = state.allSchemes || [];

    // Filter by Sector
    if (state.directorySector && state.directorySector !== 'all') {
      const sector = state.directorySector;
      list = list.filter((s) => {
        if (sector === 'Health') {
          return (
            (s.name && (s.name.includes('Ayushman') || s.name.includes('Bima'))) ||
            (s.description && s.description.toLowerCase().includes('insurance')) ||
            (s.benefit && s.benefit.toLowerCase().includes('insurance'))
          );
        }
        if (sector === 'Women') {
          return (
            s.gender === 'Female' ||
            (s.name && (s.name.includes('Mahila') || s.name.includes('Kanya') || s.name.includes('Ujjwala') || s.name.includes('Matru') || s.name.includes('Beti'))) ||
            (s.description && s.description.toLowerCase().includes('women'))
          );
        }
        if (sector === 'Urban') {
          return s.residency === 'Urban';
        }
        return s.occupation === sector;
      });
    }

    // Filter by Keyword Search Query
    if (state.directorySearchQuery) {
      const q = state.directorySearchQuery.toLowerCase();
      list = list.filter((s) => {
        const name = (s.name || '').toLowerCase();
        const desc = (s.description || '').toLowerCase();
        const benefit = (s.benefit || '').toLowerCase();
        const schemeCode = `goi-scheme-${String(s.id).padStart(3, '0')}`.toLowerCase();
        return name.includes(q) || desc.includes(q) || benefit.includes(q) || schemeCode.includes(q);
      });
    }

    return list;
  }

  function renderDirectory() {
    if (!elements.directoryGrid) return;
    const filteredSchemes = getFilteredDirectorySchemes();
    const totalCount = filteredSchemes.length;
    const isHi = state.currentLang === 'hi';
    const dict = window.I18N[state.currentLang] || window.I18N.en;

    // 1. Update Directory Counter & Status (without exposing total database count)
    if (elements.directoryCounter) {
      if (state.directorySearchQuery) {
        elements.directoryCounter.textContent = isHi
          ? `खोज परिणाम: ${totalCount} योजनाएं पाई गईं`
          : `Search Results: Found ${totalCount} matching schemes`;
      } else {
        elements.directoryCounter.textContent = isHi
          ? `चयनित श्रेणी में उपलब्ध योजनाएं`
          : `Browsing verified welfare schemes`;
      }
    }

    // 2. Handle Zero Results
    if (totalCount === 0) {
      elements.directoryGrid.innerHTML = '';
      elements.directoryGrid.classList.add('hidden');
      if (elements.emptyDirectoryNotice) elements.emptyDirectoryNotice.classList.remove('hidden');
      if (elements.directoryViewMoreDock) elements.directoryViewMoreDock.classList.add('hidden');
      return;
    }

    elements.directoryGrid.classList.remove('hidden');
    if (elements.emptyDirectoryNotice) elements.emptyDirectoryNotice.classList.add('hidden');

    // 3. Slice according to directoryVisibleCount (10 by default)
    const visibleCount = Math.min(state.directoryVisibleCount, totalCount);
    const visibleSchemes = filteredSchemes.slice(0, visibleCount);

    // 4. Render visible scheme cards
    elements.directoryGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();

    visibleSchemes.forEach((s) => {
      const card = document.createElement('article');
      card.className = 'official-scheme-card';

      card.innerHTML = `
        <div class="card-content-top">
          <span class="scheme-code-badge">GOI-SCHEME-${String(s.id).padStart(3, '0')}</span>
          <h4 class="card-scheme-name">${escapeHtml(s.name)}</h4>
          <p class="card-scheme-desc">${escapeHtml(s.description)}</p>
        </div>
        <div class="card-benefit-strip">
          <span class="benefit-strip-label">${dict.resultsCardBenefitTag || 'Verified Benefit Entitlement'}</span>
          <span class="benefit-strip-value">${escapeHtml(s.benefit)}</span>
        </div>
        <div class="card-footer-action">
          <a href="${escapeHtml(s.official_link)}" target="_blank" rel="noopener noreferrer" class="official-portal-link">
            ${dict.resultsOfficialLink || 'Visit Official Government Portal &rarr;'}
          </a>
        </div>
      `;

      fragment.appendChild(card);
    });

    elements.directoryGrid.appendChild(fragment);

    // 5. Update "View More" Dock
    if (elements.directoryViewMoreDock) {
      elements.directoryViewMoreDock.classList.remove('hidden');

      // Update progress text without exposing total database count
      if (elements.directoryProgressText) {
        elements.directoryProgressText.textContent = isHi
          ? `${visibleCount} योजनाएं प्रदर्शित`
          : `Showing ${visibleCount} schemes`;
      }

      // Check if more schemes can be loaded
      if (visibleCount < totalCount) {
        elements.btnDirectoryViewMore.classList.remove('hidden');

        elements.btnDirectoryViewMoreText.textContent = isHi
          ? `और योजनाएं देखें ↓`
          : `View More Schemes ↓`;
      } else {
        // All schemes in this filtered set are displayed
        elements.btnDirectoryViewMore.classList.add('hidden');
        if (elements.directoryProgressText) {
          if (totalCount > 10) {
            elements.directoryProgressText.textContent = isHi
              ? `सभी उपलब्ध योजनाएं सफलतापूर्वक लोड हो गईं ✓`
              : `All available schemes loaded successfully ✓`;
          } else {
            elements.directoryProgressText.textContent = isHi
              ? `सभी मिलान करने वाली योजनाएं प्रदर्शित हैं`
              : `Showing all matching schemes`;
          }
        }
      }
    }
  }

  // =========================================================================
  // 8. Reset Assessment Desk ("Start Over")
  // =========================================================================
  function resetWizard() {
    state.currentStep = 1;
    elements.form.reset();

    // Default sample values for rapid evaluation
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

    // Clear validation UI
    document.querySelectorAll('.field-validation-msg').forEach((el) => (el.textContent = ''));
    document.querySelectorAll('[aria-invalid]').forEach((el) => {
      el.removeAttribute('aria-invalid');
      el.style.borderColor = '';
    });

    // Toggle views
    elements.resultsSection.classList.add('hidden');
    elements.form.classList.remove('hidden');
    updateWizardUI();

    document.getElementById('assessmentDesk').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => elements.ageInput.focus(), 100);
  }

  // Global window handle for inline reset button
  window.SchemeApp = {
    resetWizard,
    switchLanguage,
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
