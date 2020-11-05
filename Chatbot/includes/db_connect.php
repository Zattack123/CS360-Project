<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "db_container";
$username = "zach";
$password = "zach";
$dbName = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbName);
echo "Is this working?";


if (mysqli_ping($conn)) {
    printf ("Our connection is ok!\n");
} else {
  echo "Error: Unable to connect to MySQL." . PHP_EOL;
  echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
  echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
}


if(!$conn){
  die("Connection Failed: ".mysqli_connect_error());
}else{
  echo "working!";
}

 ?>
