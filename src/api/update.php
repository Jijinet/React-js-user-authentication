<?php

    $conn=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($conn,"user_auth");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,TRUE);

    $id=$username=$email=$password=$message=$success="";

    $id=$DecodedData['id'];
    $username=$DecodedData['username'];
    $email=$DecodedData['email'];
    $password=$DecodedData['password'];



    $query="update user set username='$username',email='$email',password='$password' where id=$id";

    
    $result=mysqli_query($conn,$query);


    if($result){
        $success="User has been updated successfully";
    }
    else{
        $message="server Error";
    }
    $response[]=array("message" => $message,"success"=>$success,"result"=>$result,"query"=>$query);

    echo json_encode($response);