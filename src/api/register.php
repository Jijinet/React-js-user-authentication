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



    $conn=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($conn,"user_auth");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,TRUE);
    $check=file_get_contents('php://input');

    $username=$email=$password=$message=$success="";

    $username=$DecodedData['username'];
    $email=$DecodedData['email'];
    $password=$DecodedData['password'];
 
     

    $query="insert into 
    user(username,email,password) 
    values ('$username','$email','$password')";

    
    $result=mysqli_query($conn,$query);


    if($result){
        $success="User has been registered successfully";
    }
    else{
        $message="server Error";
    }
    $response[]=array("message" => $message,"success"=>$success,"check"=>$check);

    echo json_encode($response);