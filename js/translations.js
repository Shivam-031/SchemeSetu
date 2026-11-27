/**
 * translations.js - SchemeSetu Official Bilingual Localization (English & Hindi)
 * Compliant with Guidelines for Indian Government Websites (GIGW)
 */

const I18N = {
  en: {
    // Accessibility Top Bar
    govIndia: "GOVERNMENT OF INDIA",
    skipContent: "Skip to main content",
    screenReader: "Screen Reader Access",
    textSize: "Text Size",
    contrast: "Contrast",
    contrastNormal: "Standard",
    contrastHigh: "High Contrast",
    langSelect: "Language",

    // Branding & Header
    portalTitle: "SchemeSetu",
    portalHindiTitle: "योजनासेतु",
    portalSubtitle: "National Portal for Citizen Welfare & Scheme Eligibility",
    portalTagline: "A Centralized Rule-Based Welfare Discovery Platform",
    tollFree: "Toll Free Helpline: 1800-11-2026",
    academicNotice: "AKTU MCA Mini Project (BMC-353)",

    // Navigation Menu
    navHome: "Home",
    navEligibility: "Check Eligibility",
    navBrowse: "Browse All Schemes",
    navCategories: "Categories",
    navHowItWorks: "How It Works",
    navFaq: "FAQ & Help",

    // Hero Section
    heroBadge: "MINISTRY LEVEL CITIZEN BENEFIT DISCOVERY INITIATIVE",
    heroTitle: "Find Government Welfare Schemes You Are Eligible For",
    heroSubtitle: "A unified, machine-checkable platform evaluating citizen profiles against Central and State Government welfare programs in under 2 minutes.",
    heroCtaCheck: "Check Scheme Eligibility",
    heroCtaBrowse: "Browse Schemes Directory",
    heroSecuredNote: "Rule-Based Evaluation • No Aadhaar or Personal Identifiers Stored • 100% Free Public Service",

    // Stats Bar
    statSchemesCount: "Central & State",
    statSchemesLabel: "Welfare Schemes Cataloged",
    statCentralCount: "Verified",
    statCentralLabel: "Official Government Portals",
    statStatesCount: "28 States & UTs",
    statStatesLabel: "Coverage Across India",
    statCostCount: "100% Free",
    statCostLabel: "Direct Citizen Access",

    // Categories Section
    catSectionTitle: "Key Welfare Sectors & Beneficiary Groups",
    catSectionSubtitle: "Explore schemes categorized across essential public development domains",
    catAgri: "Agriculture & Rural",
    catAgriDesc: "PM-KISAN, crop insurance, irrigation, farm credit and solar equipment",
    catHealth: "Healthcare & Insurance",
    catHealthDesc: "Ayushman Bharat PM-JAY, life & accidental insurance covers",
    catEdu: "Education & Scholarships",
    catEduDesc: "Pre & Post-matric scholarships, fellowships, girl student incentives",
    catWomen: "Women & Child Welfare",
    catWomenDesc: "Maternity support, Sukanya Samriddhi, SHG micro-credit and safety",
    catSocial: "Social Security & Pensions",
    catSocialDesc: "Old-age pensions, Atal Pension Yojana, disability assistance",
    catArtisan: "Artisans & Small Business",
    catArtisanDesc: "PM Vishwakarma, Mudra loans, PMEGP and street vendor credit",

    // How It Works Section
    howTitle: "How SchemeSetu Works",
    howSubtitle: "A transparent 3-step citizen journey from profile entry to benefit discovery",
    howStep1Title: "1. Enter Citizen Details",
    howStep1Desc: "Provide essential demographic details: age, social category, occupation, income bracket, and rural/urban residency.",
    howStep2Title: "2. Rule Engine Evaluates",
    howStep2Desc: "Our automated decision engine cross-references your inputs against the eligibility criteria of all cataloged welfare schemes.",
    howStep3Title: "3. Access Benefits & Portals",
    howStep3Desc: "Review tailored scheme summaries, financial assistance details, and navigate directly to official government portals to apply.",

    // Wizard Section
    wizardHeading: "Citizen Welfare Eligibility Assessment Desk",
    wizardSubheading: "Follow the 3 dedicated slides below. Complete each slide to evaluate your exact eligibility across government schemes.",
    stepPersonal: "Personal Details",
    stepFinancial: "Financial Details",
    stepResidency: "Residency & Land",
    
    // Slide Specific Headings
    slide1Badge: "SLIDE 1 OF 3 • STEP 1",
    slide1Heading: "Applicant Personal & Social Demographic Details",
    slide1Desc: "Enter your age, gender, and social category to evaluate demographic eligibility rules.",

    slide2Badge: "SLIDE 2 OF 3 • STEP 2",
    slide2Heading: "Occupation & Annual Family Income Details",
    slide2Desc: "Specify your primary occupation and annual household income using the number box or slider.",

    slide3Badge: "SLIDE 3 OF 3 • STEP 3",
    slide3Heading: "Residency, BPL Ration Card & Agricultural Land",
    slide3Desc: "Select your residency area and toggle welfare criteria for targeted rural/urban benefits.",

    // Step 1 Fields
    labelAge: "Age of Applicant",
    hintAge: "Enter age in years (0 - 120)",
    placeholderAge: "e.g. 32",
    labelGender: "Gender",
    optSelect: "-- Select an Option --",
    optMale: "Male",
    optFemale: "Female",
    optOther: "Other",
    labelCategory: "Social Category",
    optGeneral: "General (Unreserved)",
    optOBC: "Other Backward Class (OBC)",
    optSC: "Scheduled Caste (SC)",
    optST: "Scheduled Tribe (ST)",

    // Step 2 Fields
    labelOccupation: "Primary Occupation",
    optFarmer: "Farmer / Agriculture Worker",
    optStudent: "Student / Pursuing Higher Education",
    optUnemployed: "Unemployed Youth / Job Seeker",
    optSelfEmployed: "Self-Employed / Small Business",
    optDailyWage: "Daily Wage Worker / Construction",
    optSalaried: "Salaried Employee (Private / Public)",
    optSeniorCitizen: "Senior Citizen / Retired",
    optArtisan: "Traditional Artisan / Craftsman",
    optAnyOcc: "Other Occupations / Any",
    labelIncome: "Annual Family Income (₹)",
    incomeFormattedNote: "Total combined income of household per year",

    // Step 3 Fields
    labelResidency: "Area of Residence",
    optRural: "Rural (Gram Panchayat)",
    optUrban: "Urban (Municipal Corporation / Nagar Palika)",
    labelBpl: "Household holds Below Poverty Line (BPL) / Antyodaya Ration Card",
    labelLand: "Household owns cultivable agricultural land",

    // Wizard Buttons
    btnBack: "← Previous Step",
    btnNext: "Proceed to Next Step →",
    btnSubmit: "Evaluate Scheme Eligibility",
    btnEvaluating: "Running Rule Engine...",

    // Results Section
    resultsHeadingPrefix: "Assessment Results: You are eligible for",
    resultsHeadingSuffix: "schemes",
    resultsCheckedNote: "evaluated across our government welfare schemes database",
    btnStartOver: "Re-assess New Profile",
    searchPlaceholder: "Search eligible schemes by keyword (e.g. kisan, pension, loan, grant)...",
    btnClear: "Clear Search",
    resultsCardBenefitTag: "Verified Benefit Entitlement",
    resultsOfficialLink: "Visit Official Government Portal →",
    noSearchFoundTitle: "No schemes match your keyword query",
    noSearchFoundDesc: "Please try broader keywords such as 'kisan', 'insurance', 'housing', or 'pension'.",
    noEligibleFoundTitle: "No schemes currently match this specific profile",
    noEligibleFoundDesc: "Welfare programs often target specific vulnerable demographics. Try adjusting criteria to check for other household members (e.g., student children, elderly parents, or women members).",

    // All Schemes Directory View
    directoryTitle: "Government Schemes Repository",
    directorySubtitle: "Complete public registry of Central and State Government welfare programs",
    filterAll: "All Sectors",
    filterAgri: "Agriculture",
    filterHealth: "Health & Insurance",
    filterEdu: "Education",
    filterWomen: "Women & Child",
    filterSocial: "Social Security",
    filterUrban: "Urban & Vendors",
    filterArtisan: "Artisans & MSME",
    directorySearchPlaceholder: "Search schemes by name, keyword, or benefits...",
    btnClearDir: "Clear Search",
    btnViewMore: "View More Schemes (+10) ↓",
    dirActiveView: "Active View:",
    emptyDirTitle: "No schemes match your keyword query",
    emptyDirDesc: "Please try broader keywords such as 'kisan', 'insurance', 'housing', or switch to 'All Sectors'.",
    btnResetDir: "Reset Repository Filters",

    // Official Footer
    footerDisclaimer: "Disclaimer: SchemeSetu is an academic web application created under Dr. A.P.J. Abdul Kalam Technical University (AKTU) MCA Mini Project BMC-353. Scheme details, eligibility parameters, and portal links are compiled from official Government of India repositories (MyScheme, National Portal of India). Final eligibility and disbursals are governed strictly by respective implementing ministries and departments.",
    footerNationalLinks: "National Government Portals",
    footerLinkIndiaGov: "National Portal of India (india.gov.in)",
    footerLinkMyScheme: "MyScheme Portal (myscheme.gov.in)",
    footerLinkDigitalIndia: "Digital India Initiative",
    footerLinkPMIndia: "Prime Minister's Office (pmindia.gov.in)",
    footerInstitutional: "Project Submission Details",
    footerInstName: "Institute of Management Studies (IMS), Noida",
    footerAffiliation: "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
    footerStudent: "Submitted by: Sakshi Singh (Roll No: 2500980140030)",
    footerGuide: "Faculty Mentor: Mr. Nihal Kumar, Asst. Professor, SOIT",
    footerCopyright: "SchemeSetu Prototype © 2026. Designed for Public Service & Academic Research.",
    footerLastUpdated: "Last Reviewed & Updated: 24 November 2026",
    footerVisitors: "Portal Visits: 14,285"
  },

  hi: {
    // Accessibility Top Bar
    govIndia: "भारत सरकार | GOVERNMENT OF INDIA",
    skipContent: "मुख्य सामग्री पर जाएं",
    screenReader: "स्क्रीन रीडर एक्सेस",
    textSize: "फ़ॉन्ट आकार",
    contrast: "कंट्रास्ट",
    contrastNormal: "सामान्य",
    contrastHigh: "उच्च कंट्रास्ट",
    langSelect: "भाषा",

    // Branding & Header
    portalTitle: "योजनासेतु",
    portalHindiTitle: "SchemeSetu",
    portalSubtitle: "नागरिक कल्याण एवं सरकारी योजना पात्रता राष्ट्रीय पोर्टल",
    portalTagline: "नियम-आधारित केंद्रीकृत कल्याणकारी योजना खोज मंच",
    tollFree: "टोल फ्री हेल्पलाइन: 1800-11-2026",
    academicNotice: "एकेटीयू एमसीए मिनी प्रोजेक्ट (BMC-353)",

    // Navigation Menu
    navHome: "मुख्य पृष्ठ",
    navEligibility: "पात्रता जांचें",
    navBrowse: "सभी योजनाएं देखें",
    navCategories: "कल्याणकारी श्रेणियां",
    navHowItWorks: "कार्यप्रणाली",
    navFaq: "सहायता केंद्र",

    // Hero Section
    heroBadge: "नागरिक कल्याण लाभ पहचान राष्ट्रीय पहल",
    heroTitle: "अपनी पात्रता के अनुसार सरकारी कल्याणकारी योजनाएं खोजें",
    heroSubtitle: "एक एकीकृत, नियम-आधारित मंच जो 2 मिनट से भी कम समय में केंद्रीय एवं राज्य स्तरीय सरकारी योजनाओं में आपकी पात्रता की जांच करता है।",
    heroCtaCheck: "योजना पात्रता की जांच करें",
    heroCtaBrowse: "योजनाओं की सूची देखें",
    heroSecuredNote: "पारदर्शी नियम-आधारित मूल्यांकन • कोई व्यक्तिगत आधार डेटा एकत्र नहीं किया जाता • पूर्णतः निःशुल्क जनसेवा",

    // Stats Bar
    statSchemesCount: "केंद्रीय व राज्य",
    statSchemesLabel: "पंजीकृत सरकारी योजनाएं",
    statCentralCount: "सत्यापित",
    statCentralLabel: "आधिकारिक सरकारी पोर्टल",
    statStatesCount: "28 राज्य व यू.टी.",
    statStatesLabel: "अखिल भारतीय विस्तार",
    statCostCount: "100% निःशुल्क",
    statCostLabel: "प्रत्यक्ष नागरिक सुविधा",

    // Categories Section
    catSectionTitle: "प्रमुख कल्याणकारी क्षेत्र एवं लाभार्थी वर्ग",
    catSectionSubtitle: "आवश्यक लोक कल्याणकारी श्रेणियों के अनुसार योजनाओं का अन्वेषण करें",
    catAgri: "कृषि एवं ग्रामीण विकास",
    catAgriDesc: "पीएम-किसान, फसल बीमा, सिंचाई सब्सिडी, किसान क्रेडिट कार्ड व सोलर पंप",
    catHealth: "स्वास्थ्य एवं जीवन बीमा",
    catHealthDesc: "आयुष्मान भारत (पीएम-जय), जीवन ज्योति एवं सुरक्षा बीमा सुरक्षा कवच",
    catEdu: "शिक्षा एवं छात्रवृत्ति",
    catEduDesc: "पूर्व व उत्तर-दशमोत्तर छात्रवृत्तियां, उच्च शिक्षा फेलोशिप एवं बालिका प्रोत्साहन",
    catWomen: "महिला एवं बाल विकास",
    catWomenDesc: "मातृत्व वंदना, सुकन्या समृद्धि, स्वयं सहायता समूह ऋण एवं महिला सुरक्षा",
    catSocial: "सामाजिक सुरक्षा एवं पेंशन",
    catSocialDesc: "वृद्धावस्था पेंशन, अटल पेंशन योजना, दिव्यांगजन व विधवा सहायता",
    catArtisan: "कारीगर, शिल्पकार व लघु उद्यम",
    catArtisanDesc: "पीएम विश्वकर्मा, मुद्रा लोन, पीएमईजीपी एवं स्ट्रीट वेंडर स्वनिधि योजना",

    // How It Works Section
    howTitle: "योजनासेतु कैसे कार्य करता है?",
    howSubtitle: "विवरण प्रविष्टि से लेकर आधिकारिक आवेदन तक 3 पारदर्शी चरण",
    howStep1Title: "1. बुनियादी विवरण दर्ज करें",
    howStep1Desc: "अपनी आयु, लिंग, सामाजिक श्रेणी, व्यवसाय, वार्षिक पारिवारिक आय और निवास क्षेत्र दर्ज करें।",
    howStep2Title: "2. नियम इंजन द्वारा जांच",
    howStep2Desc: "हमारा स्वचालित डिसीजन इंजन डेटाबेस में उपलब्ध सभी सरकारी योजनाओं के पात्रता नियमों से आपके प्रोफाइल का मिलान करता है।",
    howStep3Title: "3. योजना लाभ देखें व आवेदन करें",
    howStep3Desc: "पात्र योजनाओं के वित्तीय लाभ की समीक्षा करें और संबंधित मंत्रालय के आधिकारिक पोर्टल पर सीधे जाएं।",

    // Wizard Section
    wizardHeading: "नागरिक योजना पात्रता स्व-मूल्यांकन डेस्क",
    wizardSubheading: "नीचे दी गई 3 अलग-अलग स्लाइड्स का अनुसरण करें। प्रत्येक स्लाइड पूर्ण कर अपनी सटीक पात्रता जानें।",
    stepPersonal: "व्यक्तिगत विवरण",
    stepFinancial: "वित्तीय विवरण",
    stepResidency: "निवास एवं अन्य",

    // Slide Specific Headings
    slide1Badge: "स्लाइड 1 / 3 • चरण 1",
    slide1Heading: "आवेदक की व्यक्तिगत एवं सामाजिक जानकारी",
    slide1Desc: "पात्रता नियमों की जांच के लिए अपनी आयु, लिंग और सामाजिक वर्ग दर्ज करें।",

    slide2Badge: "स्लाइड 2 / 3 • चरण 2",
    slide2Heading: "व्यवसाय एवं वार्षिक पारिवारिक आय विवरण",
    slide2Desc: "अपना मुख्य व्यवसाय और परिवार की कुल वार्षिक आय दर्ज करें या स्लाइडर का उपयोग करें।",

    slide3Badge: "स्लाइड 3 / 3 • चरण 3",
    slide3Heading: "निवास क्षेत्र, बीपीएल राशन कार्ड एवं कृषि भूमि विवरण",
    slide3Desc: "ग्रामीण/शहरी निवास का चयन करें और लक्षित लाभों के लिए बीपीएल एवं भूमि विकल्प चुनें।",

    // Step 1 Fields
    labelAge: "आवेदक की आयु (वर्षों में)",
    hintAge: "आयु दर्ज करें (0 से 120 वर्ष)",
    placeholderAge: "उदा. 32",
    labelGender: "लिंग",
    optSelect: "-- कृपया विकल्प चुनें --",
    optMale: "पुरुष",
    optFemale: "महिला",
    optOther: "अन्य",
    labelCategory: "सामाजिक वर्ग (कैटेगरी)",
    optGeneral: "सामान्य (General)",
    optOBC: "अन्य पिछड़ा वर्ग (OBC)",
    optSC: "अनुसूचित जाति (SC)",
    optST: "अनुसूचित जनजाति (ST)",

    // Step 2 Fields
    labelOccupation: "मुख्य व्यवसाय",
    optFarmer: "किसान / कृषि श्रमिक",
    optStudent: "विद्यार्थी / उच्च शिक्षा में अध्ययनरत",
    optUnemployed: "बेरोजगार युवा / रोजगार आकांक्षी",
    optSelfEmployed: "स्वरोजगार / लघु व्यवसायी / दुकानदार",
    optDailyWage: "दैनिक वेतनभोगी / निर्माण श्रमिक",
    optSalaried: "वेतनभोगी कर्मचारी (निजी / सरकारी)",
    optSeniorCitizen: "वरिष्ठ नागरिक / सेवानिवृत्त",
    optArtisan: "पारंपरिक कारीगर / शिल्पकार",
    optAnyOcc: "अन्य व्यवसाय / कोई भी",
    labelIncome: "वार्षिक पारिवारिक आय (₹)",
    incomeFormattedNote: "परिवार के सभी सदस्यों की कुल वार्षिक आय",

    // Step 3 Fields
    labelResidency: "निवास का प्रकार",
    optRural: "ग्रामीण क्षेत्र (ग्राम पंचायत)",
    optUrban: "शहरी क्षेत्र (नगर निगम / नगरपालिका)",
    labelBpl: "परिवार गरीबी रेखा से नीचे (BPL) / अंत्योदय राशन कार्ड धारक है",
    labelLand: "परिवार के पास खेती योग्य कृषि भूमि है",

    // Wizard Buttons
    btnBack: "← पिछला चरण",
    btnNext: "अगले चरण पर जाएं →",
    btnSubmit: "योजना पात्रता की गणना करें",
    btnEvaluating: "पात्रता नियमों की जांच जारी है...",

    // Results Section
    resultsHeadingPrefix: "मूल्यांकन परिणाम: आप कुल",
    resultsHeadingSuffix: "योजनाओं के लिए पात्र हैं",
    resultsCheckedNote: "डेटाबेस में दर्ज सरकारी योजनाओं में से सत्यापित",
    btnStartOver: "नया प्रोफाइल जांचें",
    searchPlaceholder: "योजना नाम या कीवर्ड से खोजें (उदा. किसान, पेंशन, ऋण, अनुदान)...",
    btnClear: "सर्च हटाएं",
    resultsCardBenefitTag: "प्राप्त होने वाला अधिकृत लाभ",
    resultsOfficialLink: "आधिकारिक सरकारी पोर्टल देखें →",
    noSearchFoundTitle: "इस खोज शब्द के लिए कोई योजना नहीं मिली",
    noSearchFoundDesc: "कृपया अन्य सामान्य शब्द खोजें जैसे 'किसान', 'बीमा', 'आवास', या 'पेंशन'।",
    noEligibleFoundTitle: "वर्तमान प्रोफाइल के लिए कोई सीधी योजना उपलब्ध नहीं है",
    noEligibleFoundDesc: "कल्याणकारी योजनाएं अक्सर विशिष्ट वर्ग (जैसे विद्यार्थी, वरिष्ठ नागरिक या महिलाएं) के लिए लक्षित होती हैं। परिवार के अन्य सदस्यों का प्रोफाइल जांचने का प्रयास करें।",

    // All Schemes Directory View
    directoryTitle: "सरकारी योजना सार्वजनिक निर्देशिका",
    directorySubtitle: "केंद्रीय एवं राज्य सरकारों के प्रमुख कल्याणकारी कार्यक्रमों की सूची",
    filterAll: "सभी क्षेत्र",
    filterAgri: "कृषि",
    filterHealth: "स्वास्थ्य व बीमा",
    filterEdu: "शिक्षा",
    filterWomen: "महिला व बाल",
    filterSocial: "पेंशन व सुरक्षा",
    filterUrban: "शहरी व वेंडर",
    filterArtisan: "कारीगर व एमएसएमई",
    directorySearchPlaceholder: "योजना के नाम, कीवर्ड या लाभ द्वारा योजनाएं खोजें...",
    btnClearDir: "सर्च हटाएं",
    btnViewMore: "और योजनाएं देखें (+10) ↓",
    dirActiveView: "सक्रिय श्रेणी:",
    emptyDirTitle: "इस खोज शब्द के लिए कोई योजना नहीं मिली",
    emptyDirDesc: "कृपया अन्य सामान्य शब्द खोजें जैसे 'किसान', 'बीमा', 'आवास', या 'सभी क्षेत्र' चुनें।",
    btnResetDir: "फ़िल्टर रीसेट करें",

    // Official Footer
    footerDisclaimer: "अस्वीकरण: योजनासेतु डॉ. ए.पी.जे. अब्दुल कलाम प्राविधिक विश्वविद्यालय (एकेटीयू) एमसीए मिनी प्रोजेक्ट BMC-353 के अंतर्गत विकसित एक अकादमिक अनुसंधान पोर्टल है। सभी योजना विवरण, पात्रता शर्तें एवं वेब लिंक भारत सरकार के आधिकारिक स्रोतों (MyScheme, National Portal of India) से संकलित किए गए हैं। वास्तविक पात्रता व लाभ वितरण संबंधित सरकारी मंत्रालयों के नियमों के अधीन है।",
    footerNationalLinks: "महत्वपूर्ण राष्ट्रीय पोर्टल",
    footerLinkIndiaGov: "भारत का राष्ट्रीय पोर्टल (india.gov.in)",
    footerLinkMyScheme: "माईस्कीम पोर्टल (myscheme.gov.in)",
    footerLinkDigitalIndia: "डिजिटल इंडिया कार्यक्रम",
    footerLinkPMIndia: "प्रधानमंत्री कार्यालय (pmindia.gov.in)",
    footerInstitutional: "परियोजना प्रस्तुति विवरण",
    footerInstName: "इंस्टीट्यूट ऑफ मैनेजमेंट स्टडीज (आईएमएस), नोएडा",
    footerAffiliation: "संबद्ध: डॉ. ए.पी.जे. अब्दुल कलाम प्राविधिक विश्वविद्यालय, लखनऊ",
    footerStudent: "प्रस्तुतकर्ता: साक्षी सिंह (अनुक्रमांक: 2500980140030)",
    footerGuide: "मार्गदर्शक: श्री निहाल कुमार, सहायक प्राध्यापक, एसओआईटी",
    footerCopyright: "योजनासेतु प्रोटोटाइप © 2026. जनहित एवं अकादमिक अनुसंधान हेतु समर्पित।",
    footerLastUpdated: "अंतिम समीक्षा एवं अद्यतन: 24 नवंबर 2026",
    footerVisitors: "कुल आगंतुक संख्या: 14,285"
  }
};

window.I18N = I18N;
