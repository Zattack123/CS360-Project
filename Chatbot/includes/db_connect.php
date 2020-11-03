<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "172.18.0.2";
$username = "root";
$password = "root";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName, "3306");
echo "Is this working?";

if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}else{
  echo "working!";
}

 ?>
