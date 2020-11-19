<?php
session_start();
$_SESSION['testVar'] = "Test";


$servername = "db_container";
$username = "root";
$password = "secret";
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

// Table Stuff
$sql = "SELECT DeptHead FROM Math";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($depthead);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>Department Head</th>";
echo "<td>" . $depthead . "</td>";
echo "</tr>";
echo "</table>";
?>
