<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "10.0.0.17";
$username = "root";
$password = "root";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName, "3306");
echo "Is this working?";
if (mysqli_ping($conn)) {
    echo "Our connection is ok!\n";
} else {
    echo "Error: %s\n", mysqli_error($link);
}


if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}else{
  echo "working!";
}

 ?>
