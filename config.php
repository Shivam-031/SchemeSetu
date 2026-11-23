<?php
// config.php - Database connection settings for SchemeSetu
// AKTU MCA Mini Project (BMC-353)

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'scheme_checker');

/**
 * Creates and returns a MySQLi database connection.
 * If MySQL is not running, gracefully returns null so api.php can fall back to JSON dataset.
 *
 * @param bool $throwOnError
 * @return mysqli|null
 */
function getConnection($throwOnError = false) {
    // Suppress default fatal warning in newer PHP versions to allow graceful fallback
    mysqli_report(MYSQLI_REPORT_OFF);

    $conn = @new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        if ($throwOnError) {
            header('Content-Type: application/json');
            die(json_encode([
                'error' => 'Database connection failed: ' . $conn->connect_error,
                'hint' => 'Ensure MySQL is running in XAMPP and schema.sql has been imported.'
            ]));
        }
        return null;
    }
    $conn->set_charset('utf8mb4');
    return $conn;
}
?>