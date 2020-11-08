<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "db_container";
$username = "root";
$password = "secret";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName);

if (!mysqli_ping($conn)) {
  echo "Error: Unable to connect to MySQL." . PHP_EOL;
  echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
  echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
}


if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}

 ?>
