# SchemeSetu: Government Scheme Eligibility Checker Web Application

**Mini Project Synopsis & Implementation (BMC 353)**  
Submitted to **Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow (U.P.)**  
In partial fulfillment of the degree of **Master of Computer Application (MCA)** Session 2025–2027  
**Institute of Management Studies (IMS), Noida**  
*Submitted by:* **Sakshi Singh** (Roll no: 2500980140030)  
*Under the Guidance of:* **Mr. Nihal Kumar** (Assistant Professor, SOIT, IMS Noida)

---

## 📖 Overview

**SchemeSetu** is a responsive, web-based government welfare scheme eligibility checker. The name combines *"Scheme"* and *"Setu"* (the Hindi word for *bridge*), bridging the gap between eligible Indian citizens and the government welfare schemes designed for them.

Citizens answer a quick 3-step questionnaire covering:
1. **Personal Information**: Age, Gender, Social Category (General, OBC, SC, ST)
2. **Financial Information**: Occupation, Annual Family Income (with dual-synced slider and number box)
3. **Residency Information**: Rural / Urban residency, BPL (Below Poverty Line) card holder toggle, Agricultural land ownership toggle

The system matches the user's profile against **147 government welfare schemes** stored in the database. Only schemes matching all criteria are returned and rendered dynamically as responsive cards featuring benefit pills, brief summaries, and direct links to official government portals.

---

## 🛠️ Technology Stack

- **Front-end**: HTML5, CSS3, Modern JavaScript (ES6+), Fetch API, Accessible semantic controls
- **Back-end**: PHP 7.4+ / 8.x (`api.php`), input sanitization and rule engine (`checkScheme()`)
- **Database**: MySQL 5.7+ / MariaDB (`scheme_checker` database, `schemes` table)
- **Architecture**: 3-Tier Layered Architecture:
  `Client Browser (HTML/CSS/JS) <---> PHP REST-style JSON API <---> MySQL Database`

---

## 📂 Project Structure

```
minor2/
├── Sakshi Final.pdf     # Original project synopsis submitted to AKTU
├── index.php            # Primary PHP front-end page (Wizard & Results section)
├── index.html           # Standalone HTML5 front-end (for VS Code Live Server / Static hosts)
├── api.php              # REST-style JSON API and rule engine in PHP
├── config.php           # Database configuration and connection helper (mysqli)
├── schema.sql           # Database schema and 147 seeded welfare schemes
├── schemes.json         # Complete JSON dataset of 147 welfare schemes
├── generate_data.py     # Data compiler and verification script
├── serve.py             # Instant zero-config local server (Python 3)
├── css/
│   └── style.css        # Responsive styling, modern toggles, slider, card grid
├── js/
│   └── app.js           # Stepper navigation, validation, Fetch API, live search
└── README.md            # Comprehensive project documentation
```

---

## 🚀 How to Run the Project

### Option A: Quick Instant Run (Recommended for Immediate Preview)

Since Python is pre-installed on modern systems, you can launch the site immediately with all 147 schemes and active JSON API:

```bash
python serve.py
```
Open your browser at: **`http://localhost:8000`**

---

### Option B: Run with XAMPP / WAMP (PHP + MySQL)

1. **Start Apache and MySQL** in the XAMPP Control Panel.
2. **Copy the project** folder into `htdocs`:
   ```
   C:\xampp\htdocs\schemesetu
   ```
3. **Import the Database**:
   - Open **phpMyAdmin** at `http://localhost/phpmyadmin`.
   - Click on the **Import** tab.
   - Choose the file `schema.sql` located in this directory and click **Go**.
   - This creates the `scheme_checker` database and seeds all 147 government welfare schemes.
4. **Access the application**:
   - Open your browser and navigate to:
     ```
     http://localhost/schemesetu/
     ```

---

## 🧪 Testing & Verification

The project includes test cases defined in Chapter 13 of the synopsis:

| Case | Input Values | Expected Result | Verified Status |
| :--- | :--- | :--- | :--- |
| **Synopsis Demo Profile** | Age: 32, Male, OBC, Farmer, Income: ₹1,80,000, Rural, BPL: Yes, Land: Yes | Returns **35 eligible schemes** out of 147 | **PASS** |
| **Step 1 Validation** | Click *Next* with empty age / gender | Field highlighted in red; focus moves to first invalid field | **PASS** |
| **Dual Income Sync** | Move income slider | Number box and formatted badge (`₹ 1,80,000`) update synchronously | **PASS** |
| **Step Navigation** | Click *Back* from Step 3 to Step 2 | Step 2 fields and previous values remain preserved | **PASS** |
| **Female-only Filter** | Male applicant checking girl/women schemes | Schemes like *Sukanya Samriddhi* or *PMMVY* correctly excluded | **PASS** |
| **Age Cap Verification** | Age 32 checking Senior Citizen schemes (60+) | Senior citizen pension schemes correctly excluded | **PASS** |
| **Income Cap Verification** | Income above scheme cap | Excluded on rule engine income check | **PASS** |
| **Live Search Filter** | Type "kisan" or "pension" in results search bar | Scheme cards filter instantly in real-time | **PASS** |
| **Start Over** | Click *Start over* button | Form reset, steps return to Step 1, search cleared | **PASS** |

---

## 💡 Key Features Implemented

1. **3-Step Wizard Navigation**:
   - Clean stepper progress bar with active amber indicators and step labels.
   - Accessible keyboard support (`Enter` advances steps, focus auto-focuses first input).
2. **Accessible Form Controls**:
   - Number inputs with min/max validation.
   - Accessible custom selects with clean styling.
   - Dual-synced range slider (0 – ₹10 Lakh+) with Indian currency format (`₹ 1,80,000`).
   - Accessible animated toggle switches (`role="switch"`) for BPL card and agricultural land ownership.
3. **Robust Rule Engine (`checkScheme()`)**:
   - Rejects non-matching schemes on the first mismatched criterion.
   - Correctly handles `Any` wildcards and `NULL` income caps.
4. **Instant Dynamic Results & Real-time Live Search**:
   - Displays eligible count (e.g. `You're eligible for 35 schemes out of 147 checked`).
   - Scheme cards grid showing title, description, green benefit pill, and official portal link.
   - Real-time client-side live search filtering across scheme title, description, and benefit text.
   - Helpful empty states for both un-matched search queries and non-matching demographic profiles.
5. **Universal Portability**:
   - Includes full PHP + MySQL backend stack matching academic specifications.
   - Automatically supports offline/static environments with zero dependencies.
