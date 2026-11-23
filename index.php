<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SchemeSetu - Government Scheme Eligibility Checker</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="app-layout">
    <!-- Header / Hero Section -->
    <header class="app-header">
      <div class="brand-badge">GOVERNMENT SCHEME ELIGIBILITY CHECKER</div>
      <h1 class="brand-title">Scheme <span class="brand-accent">Setu</span></h1>
      <p class="brand-subtitle">
        Answer six quick questions. We'll check your profile against 147
        government welfare schemes and show only the ones you actually qualify for.
      </p>
    </header>

    <!-- Main Container Card -->
    <main class="main-card" id="mainContainer">
      <!-- Wizard View -->
      <section id="wizardSection" class="wizard-section" aria-label="Eligibility Questionnaire">
        <!-- Progress Bar & Stepper Indicator -->
        <nav aria-label="Wizard Steps" class="stepper-nav">
          <ol class="stepper-list">
            <li class="step-item active" data-step-indicator="1" aria-current="step">
              <span class="step-badge">
                <span class="step-dot"></span>
              </span>
              <span class="step-name">Personal</span>
            </li>
            <li class="step-divider" aria-hidden="true"></li>
            <li class="step-item" data-step-indicator="2">
              <span class="step-badge">
                <span class="step-dot"></span>
              </span>
              <span class="step-name">Financial</span>
            </li>
            <li class="step-divider" aria-hidden="true"></li>
            <li class="step-item" data-step-indicator="3">
              <span class="step-badge">
                <span class="step-dot"></span>
              </span>
              <span class="step-name">Residency</span>
            </li>
          </ol>
        </nav>

        <!-- Eligibility Wizard Form -->
        <form id="eligibilityForm" novalidate autocomplete="off">
          <!-- Step 1: Personal Information -->
          <fieldset class="step-panel active" data-step="1">
            <legend class="visually-hidden">Step 1: Personal Details</legend>
            <div class="field-row">
              <div class="field-group">
                <label for="age">Age <span class="req">*</span></label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="0"
                  max="120"
                  placeholder="e.g. 32"
                  required
                  enterkeyhint="next"
                >
                <span class="field-error" id="ageError" role="alert" aria-live="polite"></span>
              </div>
              <div class="field-group">
                <label for="gender">Gender <span class="req">*</span></label>
                <div class="select-wrapper">
                  <select id="gender" name="gender" required>
                    <option value="" disabled selected>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <span class="field-error" id="genderError" role="alert" aria-live="polite"></span>
              </div>
            </div>

            <div class="field-group single-col">
              <label for="category">Social category <span class="req">*</span></label>
              <div class="select-wrapper">
                <select id="category" name="category" required>
                  <option value="" disabled selected>Select</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>
              <span class="field-error" id="categoryError" role="alert" aria-live="polite"></span>
            </div>
          </fieldset>

          <!-- Step 2: Financial Information -->
          <fieldset class="step-panel" data-step="2" hidden>
            <legend class="visually-hidden">Step 2: Financial Information</legend>
            <div class="field-group single-col">
              <label for="occupation">Occupation <span class="req">*</span></label>
              <div class="select-wrapper">
                <select id="occupation" name="occupation" required>
                  <option value="" disabled selected>Select</option>
                  <option value="Farmer">Farmer</option>
                  <option value="Student">Student</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Daily Wage Worker">Daily Wage Worker</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Senior Citizen">Senior Citizen</option>
                  <option value="Artisan/Craftsman">Artisan/Craftsman</option>
                  <option value="Any">Other / Any</option>
                </select>
              </div>
              <span class="field-error" id="occupationError" role="alert" aria-live="polite"></span>
            </div>

            <div class="field-group single-col income-group">
              <div class="income-header">
                <label for="income">Annual family income (₹) <span class="req">*</span></label>
                <span class="income-preview" id="incomeDisplay">₹ 1,80,000</span>
              </div>
              <input
                type="number"
                id="income"
                name="income"
                min="0"
                max="10000000"
                step="5000"
                value="180000"
                placeholder="e.g. 180000"
                required
                enterkeyhint="next"
              >
              <div class="slider-container">
                <input
                  type="range"
                  id="incomeSlider"
                  min="0"
                  max="1000000"
                  step="5000"
                  value="180000"
                  aria-label="Annual income range selector"
                >
                <div class="slider-ticks" aria-hidden="true">
                  <span>₹0</span>
                  <span>₹2.5 Lakh</span>
                  <span>₹5 Lakh</span>
                  <span>₹7.5 Lakh</span>
                  <span>₹10 Lakh+</span>
                </div>
              </div>
              <span class="field-error" id="incomeError" role="alert" aria-live="polite"></span>
            </div>
          </fieldset>

          <!-- Step 3: Residency Information -->
          <fieldset class="step-panel" data-step="3" hidden>
            <legend class="visually-hidden">Step 3: Residency and Status</legend>
            <div class="field-group single-col">
              <label for="residency">Residency <span class="req">*</span></label>
              <div class="select-wrapper">
                <select id="residency" name="residency" required>
                  <option value="" disabled selected>Select</option>
                  <option value="Rural">Rural</option>
                  <option value="Urban">Urban</option>
                </select>
              </div>
              <span class="field-error" id="residencyError" role="alert" aria-live="polite"></span>
            </div>

            <div class="toggles-group">
              <!-- BPL Switch Toggle -->
              <label class="toggle-control" for="bpl">
                <input type="checkbox" id="bpl" name="bpl" role="switch" class="toggle-checkbox">
                <span class="toggle-track" aria-hidden="true">
                  <span class="toggle-thumb"></span>
                </span>
                <span class="toggle-text">My family holds a BPL card</span>
              </label>

              <!-- Land Ownership Switch Toggle -->
              <label class="toggle-control" for="owns_land">
                <input type="checkbox" id="owns_land" name="owns_land" role="switch" class="toggle-checkbox">
                <span class="toggle-track" aria-hidden="true">
                  <span class="toggle-thumb"></span>
                </span>
                <span class="toggle-text">I own agricultural land</span>
              </label>
            </div>
          </fieldset>

          <!-- Wizard Footer Controls -->
          <div class="wizard-nav">
            <button type="button" id="btnBack" class="btn btn-ghost" disabled>
              &larr; Back
            </button>
            <div class="nav-actions">
              <button type="button" id="btnNext" class="btn btn-primary">
                Next &rarr;
              </button>
              <button type="submit" id="btnSubmit" class="btn btn-primary hidden">
                Check my eligibility
              </button>
            </div>
          </div>
        </form>
      </section>

      <!-- Results View -->
      <section id="resultsSection" class="results-section hidden" aria-live="polite">
        <div class="results-header">
          <div class="results-summary">
            <h2 class="results-title">
              You're eligible for <span id="eligibleCount" class="count-highlight">0 schemes</span>
            </h2>
            <p class="results-checked">
              out of <span id="totalCheckedCount">147</span> checked
            </p>
          </div>
          <button type="button" id="btnStartOver" class="btn-start-over" title="Reset and check another profile">
            Start over
          </button>
        </div>

        <!-- Live Search Bar -->
        <search class="search-container">
          <div class="search-input-box">
            <svg class="search-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
            <input
              type="search"
              id="schemeSearch"
              placeholder="Search your eligible schemes by name or keyword..."
              autocomplete="off"
              aria-label="Filter schemes"
            >
            <button type="button" id="btnClearSearch" class="btn-clear-search hidden" aria-label="Clear search">
              &times;
            </button>
          </div>
          <div id="searchCounter" class="search-counter" aria-live="polite"></div>
        </search>

        <!-- Scheme Cards Grid -->
        <div id="cardsGrid" class="cards-grid"></div>

        <!-- Empty State - No match for search query -->
        <div id="emptySearchNotice" class="empty-notice hidden">
          <div class="empty-icon">🔍</div>
          <h3>No schemes matched this search</h3>
          <p>Try searching with another keyword such as "farming", "pension", "health", or "housing".</p>
        </div>

        <!-- Empty State - No eligible schemes for profile -->
        <div id="emptyProfileNotice" class="empty-notice hidden">
          <div class="empty-icon">📋</div>
          <h3>No schemes matched your profile...</h3>
          <p>
            You may adjust your answers (such as age, income bracket, or category)
            to discover schemes available for other members of your family.
          </p>
          <button type="button" class="btn btn-primary" onclick="window.SchemeApp.resetWizard()">
            Modify Profile Details
          </button>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <p class="disclaimer">Disclaimer: results are indicative; confirm on the official portal</p>
      <div class="academic-note">
        SchemeSetu &bull; AKTU MCA Mini Project (BMC-353) &bull; Submitted by Sakshi Singh (Roll: 2500980140030)
      </div>
    </footer>
  </div>

  <script src="js/app.js"></script>
</body>
</html>
