<?php
error_reporting(E_ERROR | E_PARSE);
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 1000');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }
    exit(0);
}

// Database connection
$conn = mysqli_connect("localhost", "root", "");
$db = mysqli_select_db($conn, "user_auth");

// Decode the JSON data
$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, TRUE);
$check=file_get_contents('php://input');

// Initialize variables
$username = $password = $message = $success ="";

// Check if username and password are set
if (is_null($DecodedData['username']) && is_null($DecodedData['password'])) {
    $response = array("message" => "username and/or password not provided", "success" => $success,"check"=>$check);

} else {
$username = mysqli_real_escape_string($conn, $DecodedData['username']);
    $password = mysqli_real_escape_string($conn, $DecodedData['password']);

    // Query to find the user
    $query = "SELECT * FROM user WHERE username = '$username'";
    $result = mysqli_query($conn, $query);
    $resultCheck = mysqli_num_rows($result);


    if ($resultCheck != 0) {
        $data = mysqli_fetch_assoc($result);
        
        // Verify the password
        if ($data['password'] != $password) {
            $message = "wrong password";
        } else {
            $success = 'you are logged in';
        }
    } else {
        $message = "there is no account for this user";
    }

    // Prepare the response
    $response = array("message" => $message, "success" => $success, "data" => $data,"check"=>$check);

    
}

// Return the response as JSON
echo json_encode($response);
?>
