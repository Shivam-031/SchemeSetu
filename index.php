<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SchemeSetu - National Citizen Welfare & Scheme Eligibility Portal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Accessible Skip Link -->
  <a href="#main-content" class="skip-link" data-i18n="skipContent">Skip to main content</a>

  <!-- National Tricolor Decorative Ribbon -->
  <div class="tricolor-ribbon" aria-hidden="true"></div>

  <!-- 1. Official Top Accessibility Bar (GIGW Compliant) -->
  <aside class="top-accessibility-bar" aria-label="Accessibility & Language Controls">
    <div class="gov-container top-bar-inner">
      <div class="gov-identity">
        <span class="gov-flag-icon" aria-hidden="true"></span>
        <span data-i18n="govIndia">GOVERNMENT OF INDIA</span>
      </div>
      <div class="accessibility-tools">
        <a href="#main-content" class="tool-btn" data-i18n="skipContent">Skip to Content</a>
        <div class="tool-group" aria-label="Text Size Controls">
          <span style="font-size: 0.72rem; color: #cbd5e1;" data-i18n="textSize">Text Size</span>:
          <button type="button" class="tool-btn" id="btnFontDecrease" aria-label="Decrease text size">A-</button>
          <button type="button" class="tool-btn" id="btnFontReset" aria-label="Reset text size">A</button>
          <button type="button" class="tool-btn" id="btnFontIncrease" aria-label="Increase text size">A+</button>
        </div>
        <button type="button" class="tool-btn" id="btnContrastToggle" aria-label="Toggle high contrast mode">
          <span aria-hidden="true">🌓</span> <span id="contrastModeLabel" data-i18n="contrast">Contrast</span>
        </button>
        <div class="tool-group">
          <label for="langSelect" class="visually-hidden" data-i18n="langSelect">Select Language</label>
          <select id="langSelect" class="language-switch-select" aria-label="Select website language">
            <option value="en">English (EN)</option>
            <option value="hi">हिंदी (Hindi)</option>
          </select>
        </div>
      </div>
    </div>
  </aside>

  <!-- 2. Main Government Header -->
  <header class="main-header" role="banner">
    <div class="gov-container header-inner">
      <div class="brand-emblem-group">
        <!-- SVG Lion Capital of Ashoka / State Emblem -->
        <svg class="state-emblem-svg" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="State Emblem of India">
          <!-- Stylized Ashoka Stambh Lion Capital Icon -->
          <circle cx="50" cy="30" r="18" stroke="#003366" stroke-width="4" fill="#f8fafc"/>
          <path d="M38 28C38 22 43 18 50 18C57 18 62 22 62 28C62 34 50 42 50 42C50 42 38 34 38 28Z" fill="#d45b12"/>
          <circle cx="43" cy="26" r="2.5" fill="#003366"/>
          <circle cx="57" cy="26" r="2.5" fill="#003366"/>
          <rect x="22" y="52" width="56" height="8" rx="2" fill="#003366"/>
          <circle cx="50" cy="56" r="3" fill="#ffffff"/>
          <!-- Base & Satyameva Jayate -->
          <path d="M26 60L32 84H68L74 60H26Z" stroke="#003366" stroke-width="3" fill="#f1f5f9"/>
          <!-- Ashoka Chakra central wheel -->
          <circle cx="50" cy="72" r="7" stroke="#003366" stroke-width="2"/>
          <line x1="50" y1="65" x2="50" y2="79" stroke="#003366" stroke-width="1.5"/>
          <line x1="43" y1="72" x2="57" y2="72" stroke="#003366" stroke-width="1.5"/>
          <rect x="18" y="88" width="64" height="6" fill="#003366"/>
          <text x="50" y="104" font-family="'Noto Sans Devanagari', sans-serif" font-size="8.5" font-weight="700" fill="#003366" text-anchor="middle">सत्यमेव जयते</text>
        </svg>

        <div class="brand-text-block">
          <div class="portal-name-row">
            <span class="portal-title-en" data-i18n="portalTitle">SchemeSetu</span>
            <span class="portal-title-hi" data-i18n="portalHindiTitle">योजनासेतु</span>
          </div>
          <p class="portal-subtitle" data-i18n="portalSubtitle">National Portal for Citizen Welfare & Scheme Eligibility</p>
          <span class="portal-tagline" data-i18n="portalTagline">A Centralized Rule-Based Welfare Discovery Platform</span>
        </div>
      </div>

      <div class="header-right-badges">
        <div class="helpline-box">
          <span class="helpline-label" data-i18n="tollFree">Toll Free Helpline</span>
          <span class="helpline-number">1800-11-2026</span>
        </div>
        <div class="academic-badge">
          <div>AKTU MCA Mini Project</div>
          <div style="font-size: 0.7rem; color: #64748b;">(BMC-353) • IMS Noida</div>
        </div>
      </div>
    </div>
  </header>

  <!-- 3. Primary Navigation Bar -->
  <nav class="gov-navbar" aria-label="Primary Portal Navigation">
    <div class="gov-container">
      <ul class="nav-links-list">
        <li class="nav-item active"><a href="#heroSection" data-i18n="navHome">Home</a></li>
        <li class="nav-item"><a href="#assessmentDesk" data-i18n="navEligibility">Check Eligibility</a></li>
        <li class="nav-item"><a href="#schemesDirectorySection" data-i18n="navBrowse">Browse All 147 Schemes</a></li>
        <li class="nav-item"><a href="#categoriesSection" data-i18n="navCategories">Categories</a></li>
        <li class="nav-item"><a href="#howItWorksSection" data-i18n="navHowItWorks">How It Works</a></li>
        <li class="nav-item"><a href="#footerSection" data-i18n="navFaq">Help & Project Details</a></li>
      </ul>
    </div>
  </nav>

  <!-- Main Content Area -->
  <main id="main-content">
    <!-- 4. Hero Section -->
    <section class="hero-portal-section" id="heroSection">
      <div class="gov-container">
        <div class="hero-content-wrap">
          <div class="official-initiative-pill">
            <span aria-hidden="true">🏛️</span>
            <span data-i18n="heroBadge">MINISTRY LEVEL CITIZEN BENEFIT DISCOVERY INITIATIVE</span>
          </div>
          <h1 class="hero-main-title" data-i18n="heroTitle">Find Government Welfare Schemes You Are Eligible For</h1>
          <p class="hero-description" data-i18n="heroSubtitle">
            A unified, machine-checkable platform evaluating citizen profiles against 147 Central and State Government welfare programs in under 2 minutes.
          </p>
          <div class="hero-action-buttons">
            <a href="#assessmentDesk" class="gov-btn gov-btn-primary" data-i18n="heroCtaCheck">Check Scheme Eligibility</a>
            <a href="#schemesDirectorySection" class="gov-btn gov-btn-secondary" data-i18n="heroCtaBrowse">Browse 147 Schemes Directory</a>
          </div>
          <p class="hero-trust-notes">
            <span aria-hidden="true">🔒</span>
            <span data-i18n="heroSecuredNote">Rule-Based Evaluation • No Aadhaar or Personal Identifiers Stored • 100% Free Public Service</span>
          </p>
        </div>
      </div>
    </section>

    <!-- 5. Key Indicators / Statistics Banner -->
    <section class="stats-banner-section" aria-label="Portal Metrics">
      <div class="gov-container">
        <div class="stats-grid">
          <div class="stat-cell">
            <div class="stat-number" data-i18n="statSchemesCount">147</div>
            <div class="stat-title" data-i18n="statSchemesLabel">Welfare Schemes Cataloged</div>
          </div>
          <div class="stat-cell">
            <div class="stat-number" data-i18n="statCentralCount">50+</div>
            <div class="stat-title" data-i18n="statCentralLabel">Flagship Central Programs</div>
          </div>
          <div class="stat-cell">
            <div class="stat-number" data-i18n="statStatesCount">28 States & UTs</div>
            <div class="stat-title" data-i18n="statStatesLabel">Coverage Across India</div>
          </div>
          <div class="stat-cell">
            <div class="stat-number" data-i18n="statCostCount">100% Free</div>
            <div class="stat-title" data-i18n="statCostLabel">Direct Citizen Access</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Key Welfare Sectors & Beneficiary Groups -->
    <section class="section-padding" id="categoriesSection">
      <div class="gov-container">
        <div class="section-header-block">
          <h2 class="section-main-title" data-i18n="catSectionTitle">Key Welfare Sectors & Beneficiary Groups</h2>
          <p class="section-sub-desc" data-i18n="catSectionSubtitle">Explore schemes categorized across essential public development domains</p>
        </div>
        <div class="categories-grid">
          <!-- Cat 1: Agriculture -->
          <article class="category-card">
            <div class="cat-header">
              <div class="cat-icon-frame" aria-hidden="true">🌾</div>
              <div>
                <h3 class="cat-title-text" data-i18n="catAgri">Agriculture & Rural</h3>
                <p class="cat-desc-text" data-i18n="catAgriDesc">PM-KISAN, crop insurance, irrigation, farm credit and solar equipment</p>
              </div>
            </div>
            <button type="button" class="cat-action-link" data-filter="Farmer">Explore Agricultural Schemes &rarr;</button>
          </article>

          <!-- Cat 2: Health -->
          <article class="category-card">
            <div class="cat-header">
              <div class="cat-icon-frame" aria-hidden="true">🏥</div>
              <div>
                <h3 class="cat-title-text" data-i18n="catHealth">Healthcare & Insurance</h3>
                <p class="cat-desc-text" data-i18n="catHealthDesc">Ayushman Bharat PM-JAY, life & accidental insurance covers</p>
              </div>
            </div>
            <button type="button" class="cat-action-link" data-filter="Health">Explore Healthcare Schemes &rarr;</button>
          </article>

          <!-- Cat 3: Education -->
          <article class="category-card">
            <div class="cat-header">
              <div class="cat-icon-frame" aria-hidden="true">🎓</div>
              <div>
                <h3 class="cat-title-text" data-i18n="catEdu">Education & Scholarships</h3>
                <p class="cat-desc-text" data-i18n="catEduDesc">Pre & Post-matric scholarships, fellowships, girl student incentives</p>
              </div>
            </div>
            <button type="button" class="cat-action-link" data-filter="Student">Explore Education Schemes &rarr;</button>
          </article>

          <!-- Cat 4: Women & Child -->
          <article class="category-card">
            <div class="cat-header">
              <div class="cat-icon-frame" aria-hidden="true">👩‍👧</div>
              <div>
                <h3 class="cat-title-text" data-i18n="catWomen">Women & Child Welfare</h3>
                <p class="cat-desc-text" data-i18n="catWomenDesc">Maternity support, Sukanya Samriddhi, SHG micro-credit and safety</p>
              </div>
            </div>
            <button type="button" class="cat-action-link" data-filter="Women">Explore Women Welfare Schemes &rarr;</button>
          </article>

          <!-- Cat 5: Social Security -->
          <article class="category-card">
            <div class="cat-header">
              <div class="cat-icon-frame" aria-hidden="true">👴</div>
              <div>
                <h3 class="cat-title-text" data-i18n="catSocial">Social Security & Pensions</h3>
                <p class="cat-desc-text" data-i18n="catSocialDesc">Old-age pensions, Atal Pension Yojana, disability assistance</p>
              </div>
            </div>
            <button type="button" class="cat-action-link" data-filter="Senior Citizen">Explore Pension Schemes &rarr;</button>
          </article>

          <!-- Cat 6: Artisans & MSME -->
          <article class="category-card">
            <div class="cat-header">
              <div class="cat-icon-frame" aria-hidden="true">🔨</div>
              <div>
                <h3 class="cat-title-text" data-i18n="catArtisan">Artisans & Small Business</h3>
                <p class="cat-desc-text" data-i18n="catArtisanDesc">PM Vishwakarma, Mudra loans, PMEGP and street vendor credit</p>
              </div>
            </div>
            <button type="button" class="cat-action-link" data-filter="Artisan/Craftsman">Explore Artisan & MSME Schemes &rarr;</button>
          </article>
        </div>
      </div>
    </section>

    <!-- 7. How SchemeSetu Works Section -->
    <section class="section-padding how-it-works-section" id="howItWorksSection">
      <div class="gov-container">
        <div class="section-header-block">
          <h2 class="section-main-title" data-i18n="howTitle">How SchemeSetu Works</h2>
          <p class="section-sub-desc" data-i18n="howSubtitle">A transparent 3-step citizen journey from profile entry to benefit discovery</p>
        </div>
        <div class="steps-cards-row">
          <div class="how-step-card">
            <span class="step-index-badge">STEP 01</span>
            <h3 data-i18n="howStep1Title">1. Enter Citizen Details</h3>
            <p data-i18n="howStep1Desc">Provide essential demographic details: age, social category, occupation, income bracket, and rural/urban residency.</p>
          </div>
          <div class="how-step-card">
            <span class="step-index-badge">STEP 02</span>
            <h3 data-i18n="howStep2Title">2. Rule Engine Evaluates</h3>
            <p data-i18n="howStep2Desc">Our automated decision engine cross-references your inputs against the eligibility criteria of all 147 cataloged schemes.</p>
          </div>
          <div class="how-step-card">
            <span class="step-index-badge">STEP 03</span>
            <h3 data-i18n="howStep3Title">3. Access Benefits & Portals</h3>
            <p data-i18n="howStep3Desc">Review tailored scheme summaries, financial assistance details, and navigate directly to official government portals to apply.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Interactive Eligibility Assessment Desk (The 3-Step Wizard) -->
    <section class="section-padding" id="assessmentDesk">
      <div class="gov-container">
        <div class="desk-container-card">
          <div class="desk-header">
            <h2 class="desk-title" data-i18n="wizardHeading">Citizen Welfare Eligibility Assessment</h2>
            <p class="desk-subtitle" data-i18n="wizardSubheading">Answer six basic questions. The decision rule engine will compute your eligibility across all 147 schemes instantly.</p>
          </div>

          <div class="desk-body">
            <!-- Stepper Progress Tracker -->
            <nav aria-label="Assessment Progress" class="gov-stepper-tracker">
              <ol class="stepper-progress-list">
                <li class="step-node active" data-step-indicator="1" aria-current="step">
                  <span class="step-circle">1</span>
                  <span class="step-label" data-i18n="stepPersonal">Personal Details</span>
                </li>
                <li class="step-connector-line" aria-hidden="true"></li>
                <li class="step-node" data-step-indicator="2">
                  <span class="step-circle">2</span>
                  <span class="step-label" data-i18n="stepFinancial">Financial Details</span>
                </li>
                <li class="step-connector-line" aria-hidden="true"></li>
                <li class="step-node" data-step-indicator="3">
                  <span class="step-circle">3</span>
                  <span class="step-label" data-i18n="stepResidency">Residency & Land</span>
                </li>
              </ol>
            </nav>

            <!-- Slide Progress Meter -->
            <div class="slide-progress-meter" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" aria-label="Assessment Progress">
              <div class="slide-progress-fill" id="slideProgressFill"></div>
            </div>

            <!-- Form -->
            <form id="eligibilityForm" novalidate autocomplete="off">
              <!-- Slide 1: Personal Details -->
              <fieldset class="wizard-fieldset step-panel active" data-step="1">
                <legend class="visually-hidden">Step 1: Personal Information</legend>
                
                <div class="slide-header-banner">
                  <span class="slide-badge-tag" data-i18n="slide1Badge">SLIDE 1 OF 3 • STEP 1</span>
                  <h3 class="slide-title-text" data-i18n="slide1Heading">Applicant Personal & Social Demographic Details</h3>
                  <p class="slide-desc-text" data-i18n="slide1Desc">Enter your age, gender, and social category to evaluate demographic eligibility rules.</p>
                </div>

                <div class="form-grid-2col">
                  <div class="gov-form-group">
                    <label for="age" class="gov-label">
                      <span data-i18n="labelAge">Age of Applicant</span> <span class="req-marker">*</span>
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      class="gov-input"
                      min="0"
                      max="120"
                      placeholder="e.g. 32"
                      required
                      enterkeyhint="next"
                    >
                    <span class="field-validation-msg" id="ageError" role="alert" aria-live="polite"></span>
                  </div>

                  <div class="gov-form-group">
                    <label for="gender" class="gov-label">
                      <span data-i18n="labelGender">Gender</span> <span class="req-marker">*</span>
                    </label>
                    <select id="gender" name="gender" class="gov-select" required>
                      <option value="" disabled selected data-i18n="optSelect">-- Select an Option --</option>
                      <option value="Male" data-i18n="optMale">Male</option>
                      <option value="Female" data-i18n="optFemale">Female</option>
                      <option value="Other" data-i18n="optOther">Other</option>
                    </select>
                    <span class="field-validation-msg" id="genderError" role="alert" aria-live="polite"></span>
                  </div>
                </div>

                <div class="gov-form-group">
                  <label for="category" class="gov-label">
                    <span data-i18n="labelCategory">Social Category</span> <span class="req-marker">*</span>
                  </label>
                  <select id="category" name="category" class="gov-select" required>
                    <option value="" disabled selected data-i18n="optSelect">-- Select an Option --</option>
                    <option value="General" data-i18n="optGeneral">General (Unreserved)</option>
                    <option value="OBC" data-i18n="optOBC">Other Backward Class (OBC)</option>
                    <option value="SC" data-i18n="optSC">Scheduled Caste (SC)</option>
                    <option value="ST" data-i18n="optST">Scheduled Tribe (ST)</option>
                  </select>
                  <span class="field-validation-msg" id="categoryError" role="alert" aria-live="polite"></span>
                </div>
              </fieldset>

              <!-- Slide 2: Financial Details -->
              <fieldset class="wizard-fieldset step-panel" data-step="2" hidden>
                <legend class="visually-hidden">Step 2: Financial Information</legend>

                <div class="slide-header-banner">
                  <span class="slide-badge-tag" data-i18n="slide2Badge">SLIDE 2 OF 3 • STEP 2</span>
                  <h3 class="slide-title-text" data-i18n="slide2Heading">Occupation & Annual Family Income Details</h3>
                  <p class="slide-desc-text" data-i18n="slide2Desc">Specify your primary occupation and annual household income using the number box or slider.</p>
                </div>

                <div class="gov-form-group">
                  <label for="occupation" class="gov-label">
                    <span data-i18n="labelOccupation">Primary Occupation</span> <span class="req-marker">*</span>
                  </label>
                  <select id="occupation" name="occupation" class="gov-select" required>
                    <option value="" disabled selected data-i18n="optSelect">-- Select an Option --</option>
                    <option value="Farmer" data-i18n="optFarmer">Farmer / Agriculture Worker</option>
                    <option value="Student" data-i18n="optStudent">Student / Pursuing Higher Education</option>
                    <option value="Unemployed" data-i18n="optUnemployed">Unemployed Youth / Job Seeker</option>
                    <option value="Self-Employed" data-i18n="optSelfEmployed">Self-Employed / Small Business</option>
                    <option value="Daily Wage Worker" data-i18n="optDailyWage">Daily Wage Worker / Construction</option>
                    <option value="Salaried" data-i18n="optSalaried">Salaried Employee (Private / Public)</option>
                    <option value="Senior Citizen" data-i18n="optSeniorCitizen">Senior Citizen / Retired</option>
                    <option value="Artisan/Craftsman" data-i18n="optArtisan">Traditional Artisan / Craftsman</option>
                    <option value="Any" data-i18n="optAnyOcc">Other Occupations / Any</option>
                  </select>
                  <span class="field-validation-msg" id="occupationError" role="alert" aria-live="polite"></span>
                </div>

                <div class="income-control-box">
                  <div class="income-row-header">
                    <label for="income" class="gov-label">
                      <span data-i18n="labelIncome">Annual Family Income (₹)</span> <span class="req-marker">*</span>
                    </label>
                    <span class="income-current-badge" id="incomeDisplay">₹ 1,80,000</span>
                  </div>
                  <input
                    type="number"
                    id="income"
                    name="income"
                    class="gov-input"
                    min="0"
                    max="10000000"
                    step="5000"
                    value="180000"
                    placeholder="e.g. 180000"
                    required
                    enterkeyhint="next"
                  >
                  <input
                    type="range"
                    id="incomeSlider"
                    class="gov-range-slider"
                    min="0"
                    max="1000000"
                    step="5000"
                    value="180000"
                    aria-label="Annual family income range slider"
                  >
                  <div class="range-scale-ticks" aria-hidden="true">
                    <span>₹0</span>
                    <span>₹2.5 Lakh</span>
                    <span>₹5.0 Lakh</span>
                    <span>₹7.5 Lakh</span>
                    <span>₹10.0 Lakh+</span>
                  </div>
                  <span class="field-validation-msg" id="incomeError" role="alert" aria-live="polite"></span>
                </div>
              </fieldset>

              <!-- Slide 3: Residency Details -->
              <fieldset class="wizard-fieldset step-panel" data-step="3" hidden>
                <legend class="visually-hidden">Step 3: Residency Information</legend>

                <div class="slide-header-banner">
                  <span class="slide-badge-tag" data-i18n="slide3Badge">SLIDE 3 OF 3 • STEP 3</span>
                  <h3 class="slide-title-text" data-i18n="slide3Heading">Residency, BPL Ration Card & Agricultural Land</h3>
                  <p class="slide-desc-text" data-i18n="slide3Desc">Select your residency area and toggle welfare criteria for targeted rural/urban benefits.</p>
                </div>

                <div class="gov-form-group">
                  <label for="residency" class="gov-label">
                    <span data-i18n="labelResidency">Area of Residence</span> <span class="req-marker">*</span>
                  </label>
                  <select id="residency" name="residency" class="gov-select" required>
                    <option value="" disabled selected data-i18n="optSelect">-- Select an Option --</option>
                    <option value="Rural" data-i18n="optRural">Rural (Gram Panchayat)</option>
                    <option value="Urban" data-i18n="optUrban">Urban (Municipal Corporation / Nagar Palika)</option>
                  </select>
                  <span class="field-validation-msg" id="residencyError" role="alert" aria-live="polite"></span>
                </div>

                <div class="toggles-stack">
                  <!-- BPL Card Switch -->
                  <label class="gov-switch-label" for="bpl">
                    <input type="checkbox" id="bpl" name="bpl" role="switch" class="gov-switch-input">
                    <span class="switch-visual-track" aria-hidden="true">
                      <span class="switch-visual-thumb"></span>
                    </span>
                    <span class="switch-caption" data-i18n="labelBpl">Household holds Below Poverty Line (BPL) / Antyodaya Ration Card</span>
                  </label>

                  <!-- Land Ownership Switch -->
                  <label class="gov-switch-label" for="owns_land">
                    <input type="checkbox" id="owns_land" name="owns_land" role="switch" class="gov-switch-input">
                    <span class="switch-visual-track" aria-hidden="true">
                      <span class="switch-visual-thumb"></span>
                    </span>
                    <span class="switch-caption" data-i18n="labelLand">Household owns cultivable agricultural land</span>
                  </label>
                </div>
              </fieldset>

              <!-- Wizard Button Bar -->
              <div class="wizard-button-bar">
                <button type="button" id="btnBack" class="gov-btn gov-btn-outline" disabled data-i18n="btnBack">
                  &larr; Previous Step
                </button>
                <div>
                  <button type="button" id="btnNext" class="gov-btn gov-btn-primary" data-i18n="btnNext">
                    Proceed to Next Step &rarr;
                  </button>
                  <button type="submit" id="btnSubmit" class="gov-btn gov-btn-primary hidden" data-i18n="btnSubmit">
                    Evaluate Scheme Eligibility
                  </button>
                </div>
              </div>
            </form>

            <!-- Results Section (Inside Assessment Desk) -->
            <section id="resultsSection" class="results-desk-section hidden" aria-live="polite">
              <div class="results-gazette-header">
                <div>
                  <h3 class="results-counter-title">
                    <span data-i18n="resultsHeadingPrefix">Assessment Results: You are eligible for</span>
                    <span id="eligibleCount" class="eligible-count-number">0 schemes</span>
                  </h3>
                  <p class="results-verified-note" data-i18n="resultsCheckedNote">evaluated out of 147 government welfare schemes in database</p>
                </div>
                <button type="button" id="btnStartOver" class="btn-reassess" data-i18n="btnStartOver">
                  Re-assess New Profile
                </button>
              </div>

              <!-- Search & Filter Controls -->
              <search class="search-filter-dock">
                <div class="search-input-frame">
                  <span class="search-prefix-icon" aria-hidden="true">🔍</span>
                  <input
                    type="search"
                    id="schemeSearch"
                    class="search-input-gov"
                    placeholder="Search eligible schemes by keyword (e.g. kisan, pension, loan, grant)..."
                    autocomplete="off"
                    aria-label="Filter eligible schemes"
                  >
                  <button type="button" id="btnClearSearch" class="btn-clear-search-gov hidden" aria-label="Clear search query">&times;</button>
                </div>
                <div id="searchCounter" style="font-size: 0.8rem; font-weight: 600; color: #4b5563;"></div>
              </search>

              <!-- Results Cards Grid -->
              <div id="cardsGrid" class="schemes-cards-grid"></div>

              <!-- Empty Results Notice -->
              <div id="emptySearchNotice" class="gov-empty-notice hidden">
                <h3 data-i18n="noSearchFoundTitle">No schemes match your keyword query</h3>
                <p data-i18n="noSearchFoundDesc">Please try broader keywords such as 'kisan', 'insurance', 'housing', or 'pension'.</p>
              </div>

              <div id="emptyProfileNotice" class="gov-empty-notice hidden">
                <h3 data-i18n="noEligibleFoundTitle">No schemes currently match this specific profile</h3>
                <p data-i18n="noEligibleFoundDesc">Welfare programs often target specific vulnerable demographics. Try adjusting criteria to check for other household members (e.g., student children, elderly parents, or women members).</p>
                <button type="button" class="gov-btn gov-btn-secondary" style="margin-top: 1rem;" onclick="window.SchemeApp.resetWizard()" data-i18n="btnStartOver">
                  Re-assess New Profile
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Complete Schemes Directory (All 147 Schemes Explorer) -->
    <section class="section-padding" id="schemesDirectorySection" style="background-color: #ffffff; border-top: 1px solid var(--gov-border);">
      <div class="gov-container">
        <div class="section-header-block">
          <h2 class="section-main-title" data-i18n="directoryTitle">Government Schemes Repository (147 Schemes)</h2>
          <p class="section-sub-desc" data-i18n="directorySubtitle">Complete public registry of Central and State Government welfare programs</p>
        </div>

        <!-- Directory Filter Tabs -->
        <div class="filter-tabs-row" id="directoryFilterTabs" role="tablist" aria-label="Directory Sector Filters">
          <button type="button" class="filter-tab-pill active" data-sector="all" data-i18n="filterAll">All Sectors (147)</button>
          <button type="button" class="filter-tab-pill" data-sector="Farmer" data-i18n="filterAgri">Agriculture</button>
          <button type="button" class="filter-tab-pill" data-sector="Health" data-i18n="filterHealth">Health & Insurance</button>
          <button type="button" class="filter-tab-pill" data-sector="Student" data-i18n="filterEdu">Education</button>
          <button type="button" class="filter-tab-pill" data-sector="Women" data-i18n="filterWomen">Women & Child</button>
          <button type="button" class="filter-tab-pill" data-sector="Senior Citizen" data-i18n="filterSocial">Social Security</button>
          <button type="button" class="filter-tab-pill" data-sector="Urban" data-i18n="filterUrban">Urban & Vendors</button>
          <button type="button" class="filter-tab-pill" data-sector="Artisan/Craftsman" data-i18n="filterArtisan">Artisans & MSME</button>
        </div>

        <!-- Directory Search Bar (Modern Web Guidance Compliant) -->
        <search class="search-filter-dock" style="margin-top: 1.25rem;">
          <div class="search-input-frame">
            <span class="search-prefix-icon" aria-hidden="true">🔍</span>
            <input
              type="search"
              id="directorySearch"
              class="search-input-gov"
              placeholder="Search all 147 schemes by name, keyword, or benefits..."
              autocomplete="off"
              aria-label="Search all government schemes repository"
              data-i18n-placeholder="directorySearchPlaceholder"
            >
            <button type="button" id="btnClearDirectorySearch" class="btn-clear-search-gov hidden" aria-label="Clear repository search">&times;</button>
          </div>
          <div class="directory-search-status-bar" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.825rem; color: #475569; padding-inline: 0.25rem;">
            <div id="directoryCounter" role="status" aria-live="polite" style="font-weight: 600;"></div>
            <div id="directoryActiveBadge" style="font-size: 0.75rem; background-color: #f1f5f9; padding: 0.2rem 0.55rem; border-radius: var(--radius-xs); border: 1px solid #cbd5e1; font-weight: 600; color: var(--gov-navy);">
              <span data-i18n="dirActiveView">Active View:</span> <span id="directoryActiveSectorName" data-i18n="filterAll">All Sectors (147)</span>
            </div>
          </div>
        </search>

        <!-- Schemes Cards Grid (10 displayed by default) -->
        <div id="directoryGrid" class="schemes-cards-grid" style="margin-top: 1.5rem;"></div>

        <!-- Empty Directory Results Notice -->
        <div id="emptyDirectoryNotice" class="gov-empty-notice hidden" style="margin-top: 1.75rem;">
          <h3 data-i18n="emptyDirTitle">No schemes match your keyword query</h3>
          <p data-i18n="emptyDirDesc">Please try broader keywords such as 'kisan', 'insurance', 'housing', or switch to 'All Sectors'.</p>
          <button type="button" id="btnResetDirFilters" class="gov-btn gov-btn-secondary" style="margin-top: 1rem;" data-i18n="btnResetDir">
            Reset Repository Filters
          </button>
        </div>

        <!-- View More Pagination Controller (Shows 10 by default, reveals next 10) -->
        <div id="directoryViewMoreDock" class="directory-view-more-dock" style="margin-top: 2rem; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
          <button type="button" id="btnDirectoryViewMore" class="gov-btn gov-btn-secondary" style="padding: 0.75rem 2.25rem; font-size: 0.95rem; font-weight: 700;">
            <span id="btnDirectoryViewMoreText" data-i18n="btnViewMore">View More Schemes (+10) ↓</span>
          </button>
          <div id="directoryProgressText" style="font-size: 0.85rem; color: #475569; font-weight: 600;" role="status" aria-live="polite">
            Showing 10 of 147 schemes
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 10. Official Government Footer (GIGW Compliant) -->
  <footer class="official-gov-footer" id="footerSection" role="contentinfo">
    <div class="gov-container">
      <div class="footer-top-grid">
        <!-- Col 1: Portal Disclaimer & Mandate -->
        <div>
          <h3 class="footer-col-title">About SchemeSetu</h3>
          <p class="footer-disclaimer-text" data-i18n="footerDisclaimer">
            Disclaimer: SchemeSetu is an academic web application created under Dr. A.P.J. Abdul Kalam Technical University (AKTU) MCA Mini Project BMC-353. Scheme details, eligibility parameters, and portal links are compiled from official Government of India repositories (MyScheme, National Portal of India). Final eligibility and disbursals are governed strictly by respective implementing ministries and departments.
          </p>
        </div>

        <!-- Col 2: National Links -->
        <div>
          <h3 class="footer-col-title" data-i18n="footerNationalLinks">National Government Portals</h3>
          <ul class="footer-links-list">
            <li><a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" data-i18n="footerLinkIndiaGov">National Portal of India (india.gov.in)</a></li>
            <li><a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" data-i18n="footerLinkMyScheme">MyScheme Portal (myscheme.gov.in)</a></li>
            <li><a href="https://digitalindia.gov.in" target="_blank" rel="noopener noreferrer" data-i18n="footerLinkDigitalIndia">Digital India Initiative</a></li>
            <li><a href="https://www.pmindia.gov.in" target="_blank" rel="noopener noreferrer" data-i18n="footerLinkPMIndia">Prime Minister's Office (pmindia.gov.in)</a></li>
          </ul>
        </div>

        <!-- Col 3: Academic & Submission Details -->
        <div>
          <h3 class="footer-col-title" data-i18n="footerInstitutional">Project Submission Details</h3>
          <div class="footer-meta-block">
            <span data-i18n="footerInstName">Institute of Management Studies (IMS), Noida</span>
            <span data-i18n="footerAffiliation">Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</span>
            <span data-i18n="footerStudent">Submitted by: Sakshi Singh (Roll No: 2500980140030)</span>
            <span data-i18n="footerGuide">Faculty Mentor: Mr. Nihal Kumar, Asst. Professor, SOIT</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Utility Bar -->
    <div class="footer-bottom-bar">
      <div class="gov-container footer-bottom-flex">
        <span data-i18n="footerCopyright">SchemeSetu Prototype © 2026. Designed for Public Service & Academic Research.</span>
        <div style="display: flex; gap: 1.5rem;">
          <span data-i18n="footerLastUpdated">Last Reviewed & Updated: 24 November 2026</span>
          <span data-i18n="footerVisitors">Portal Visits: 14,285</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/translations.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
