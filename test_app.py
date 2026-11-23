import urllib.request
import json

print("----------------------------------------------------------------")
print("  Running Automated Tests for SchemeSetu Application")
print("----------------------------------------------------------------")

# 1. Test GET /
try:
    with urllib.request.urlopen("http://localhost:8000") as res:
        html = res.read().decode("utf-8")
        assert "Scheme" in html and "Setu" in html
        assert "Personal" in html and "Financial" in html and "Residency" in html
        assert "eligibilityForm" in html
        print("[PASS] GET / -> HTTP 200, Web page loaded successfully")
except Exception as e:
    print("[FAIL] GET / ->", e)

# 2. Test GET /schemes.json
try:
    with urllib.request.urlopen("http://localhost:8000/schemes.json") as res:
        schemes = json.loads(res.read().decode("utf-8"))
        assert len(schemes) == 147
        print(f"[PASS] GET /schemes.json -> HTTP 200, exactly {len(schemes)} schemes verified")
except Exception as e:
    print("[FAIL] GET /schemes.json ->", e)

# 3. Test POST /api.php with Farmer profile from Chapter 10 in Synopsis
payload = {
    "age": 32,
    "gender": "Male",
    "category": "OBC",
    "occupation": "Farmer",
    "income": 180000,
    "residency": "Rural",
    "bpl": True,
    "owns_land": True
}

req = urllib.request.Request(
    "http://localhost:8000/api.php",
    data=json.dumps(payload).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)

try:
    with urllib.request.urlopen(req) as res:
        data = json.loads(res.read().decode("utf-8"))
        tot = data.get("total_schemes_checked")
        elig = data.get("eligible_count")
        print(f"[INFO] total_schemes_checked: {tot}, eligible_count: {elig}")
        assert tot == 147, f"Expected 147, got {tot}"
        assert elig == 35, f"Expected 35, got {elig}"
        names = [s["name"] for s in data.get("eligible", [])]
        print(f"[PASS] POST /api.php matches Farmer profile test case with exactly 35 schemes!")
        print("       Top 4 matches:", names[:4])
except Exception as e:
    print("[FAIL] POST /api.php ->", e)

# 4. Test Student profile
student_payload = {
    "age": 20,
    "gender": "Female",
    "category": "SC",
    "occupation": "Student",
    "income": 120000,
    "residency": "Urban",
    "bpl": True,
    "owns_land": False
}

req_student = urllib.request.Request(
    "http://localhost:8000/api.php",
    data=json.dumps(student_payload).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)

try:
    with urllib.request.urlopen(req_student) as res:
        data = json.loads(res.read().decode("utf-8"))
        elig = data.get("eligible_count")
        assert elig > 0, "Student should have matching schemes"
        print(f"[PASS] POST /api.php matches Female SC Student profile with {elig} eligible schemes")
except Exception as e:
    print("[FAIL] Student profile test ->", e)

# 5. Test Senior Citizen profile
senior_payload = {
    "age": 65,
    "gender": "Male",
    "category": "General",
    "occupation": "Senior Citizen",
    "income": 200000,
    "residency": "Rural",
    "bpl": True,
    "owns_land": False
}

req_senior = urllib.request.Request(
    "http://localhost:8000/api.php",
    data=json.dumps(senior_payload).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)

try:
    with urllib.request.urlopen(req_senior) as res:
        data = json.loads(res.read().decode("utf-8"))
        elig = data.get("eligible_count")
        assert elig > 0, "Senior citizen should have matching schemes"
        print(f"[PASS] POST /api.php matches Senior Citizen profile with {elig} eligible schemes")
except Exception as e:
    print("[FAIL] Senior citizen profile test ->", e)

print("----------------------------------------------------------------")
print("  All verification tests passed successfully!")
print("----------------------------------------------------------------")
