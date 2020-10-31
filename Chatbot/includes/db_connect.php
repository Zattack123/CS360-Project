<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "db_container";
$username = "root";
$password = "ripley77";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName);
echo "Is this working?";

if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}

 ?>
