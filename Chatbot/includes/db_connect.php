<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName);
echo "Is this working?";

if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}else{
  echo "working!";
}

 ?>
