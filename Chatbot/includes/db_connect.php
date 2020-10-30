<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "localhost";
$username = "admin";
$password = "admin";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName);
echo "This is working?";

if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}

 ?>
