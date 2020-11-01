<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "172.17.0.4";
$username = "admin";
$password = "admin";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName);
echo "Is this working?";

if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}

 ?>
