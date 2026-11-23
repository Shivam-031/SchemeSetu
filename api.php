<?php
// api.php - SchemeSetu JSON API and Eligibility Rule Engine
// AKTU MCA Mini Project (BMC-353)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config.php';

// ---- 1. Collect and sanitize user input (from JSON body) ----
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true) ?? [];

$user = [
    'age'         => isset($input['age']) ? (int) $input['age'] : 0,
    'gender'      => isset($input['gender']) ? trim($input['gender']) : '',
    'category'    => isset($input['category']) ? trim($input['category']) : '',
    'occupation'  => isset($input['occupation']) ? trim($input['occupation']) : '',
    'income'      => isset($input['income']) ? (int) $input['income'] : 0,
    'residency'   => isset($input['residency']) ? trim($input['residency']) : '',
    'bpl'         => !empty($input['bpl']),
    'owns_land'   => !empty($input['owns_land']),
];

// ---- 2. Fetch all schemes from MySQL database (with graceful fallback to schemes.json) ----
$schemes = [];
$conn = getConnection(false);

if ($conn) {
    $result = $conn->query("SELECT * FROM schemes ORDER BY id ASC");
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $schemes[] = $row;
        }
    }
    $conn->close();
}

// Fallback to local schemes.json if MySQL is offline or table is empty
if (empty($schemes) && file_exists(__DIR__ . '/schemes.json')) {
    $jsonContent = file_get_contents(__DIR__ . '/schemes.json');
    $schemes = json_decode($jsonContent, true) ?? [];
}

/**
 * Compares scheme eligibility criteria against user profile.
 * Rejects on the first mismatched criterion.
 *
 * @param array $scheme
 * @param array $user
 * @return bool
 */
function checkScheme(array $scheme, array $user): bool {
    // 1. Age check
    if ($user['age'] < (int) $scheme['min_age'] || $user['age'] > (int) $scheme['max_age']) {
        return false;
    }

    // 2. Gender check ('Any' matches all)
    if ($scheme['gender'] !== 'Any' && strcasecmp($scheme['gender'], $user['gender']) !== 0) {
        return false;
    }

    // 3. Social Category check ('Any' matches all)
    if ($scheme['category'] !== 'Any' && strcasecmp($scheme['category'], $user['category']) !== 0) {
        return false;
    }

    // 4. Occupation check ('Any' matches all)
    if ($scheme['occupation'] !== 'Any' && strcasecmp($scheme['occupation'], $user['occupation']) !== 0) {
        return false;
    }

    // 5. Income ceiling check (NULL means no cap)
    if ($scheme['max_annual_income'] !== null && $scheme['max_annual_income'] !== '') {
        if ($user['income'] > (int) $scheme['max_annual_income']) {
            return false;
        }
    }

    // 6. Residency check ('Any' matches all)
    if ($scheme['residency'] !== 'Any' && strcasecmp($scheme['residency'], $user['residency']) !== 0) {
        return false;
    }

    // 7. BPL requirement check (1 requires BPL, 0 does not)
    if ((int) $scheme['requires_bpl'] === 1 && !$user['bpl']) {
        return false;
    }

    // 8. Land ownership requirement check (1 requires land, 0 does not)
    if ((int) $scheme['requires_land'] === 1 && !$user['owns_land']) {
        return false;
    }

    return true;
}

// ---- 3. Run the rule engine, keep only eligible schemes ----
$eligible = [];
foreach ($schemes as $scheme) {
    if (checkScheme($scheme, $user)) {
        $eligible[] = [
            'id'            => (int) $scheme['id'],
            'name'          => $scheme['name'],
            'description'   => $scheme['description'],
            'benefit'       => $scheme['benefit'],
            'official_link' => $scheme['official_link'],
        ];
    }
}

// ---- 4. Return JSON response ----
echo json_encode([
    'total_schemes_checked' => count($schemes),
    'eligible_count'        => count($eligible),
    'eligible'              => $eligible,
], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
?>