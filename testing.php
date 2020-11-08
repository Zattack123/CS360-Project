<!DOCTYPE html>
<html lang="en">
<head>
  <body>
<?php

require "db_connect.php";
//require "Chatbot/index.html";

$sql = "SELECT * FROM Math";

$stmt = mysqli_stmt_init($conn);

if(!mysqli_stmt_prepare($stmt, $sql)){
  echo "<h1>ERROR</h1>";
}

else{
  mysqli_stmt_execute($stmt);
  $result = mysqli_stmt_get_result($stmt);
}

if($stmt){
  $row = mysqli_fetch_array($result);
  echo "<p>Math Department Information</p>";
  echo "<p>" . $row['DeptHead'] . "</p>";
  echo "<p>" . $row['DeptHeadEmail'] . "</p>";
  echo "<p>" . $row['DeptWebsite'] . "</p>";
  echo "<p>" . $row['DegreePaths'] . "</p>";
  echo "<p>" . $row['CourseRotation'] . "</p>";
  echo "<p>" . $row['DeptDirectory'] . "</p>";
  echo "<p>" . $row['ContactPage'] . "</p>";
  echo "<p>" . $row['GraduateInfo'] . "</p>";
  echo "<p>" . $row['CollegeName'] . "</p>";
  echo "<p>" . $row['CollegeWebsite'] . "</p>";
}
 ?>
</body>
</head>
</html>
