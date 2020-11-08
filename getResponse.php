<?php

require "Chatbot/includes/db_connect.php";

// user input will be replaced with the key words in the input
$userInput = $_POST['userInput'];
$myArray = array();
if ($result = mysqli_query($conn, "SELECT * FROM Math", MYSQLI_USE_RESULT)) {
  while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[] = $row;
  }
  echo json_encode($myArray);
  /* Note, that we can't execute any functions which interact with the
     server until result set was closed. All calls will return an
     'out of sync' error */
  if (!mysqli_query($conn, "SET @a:='this will not work'")) {
      printf("Error: %s\n", mysqli_error($conn));
  }
  mysqli_free_result($result);
}

mysqli_close($conn);
?>



