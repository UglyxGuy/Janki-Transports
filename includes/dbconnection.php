<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    $dbh = new PDO("mysql:host=localhost;dbname=jtdb;charset=utf8mb4", "root", "");
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>