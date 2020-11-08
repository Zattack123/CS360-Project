<html lang="en">

  <head>
    <title>Chatbot</title>
		<script type="text/javascript" src="functions.js"></script>
    <!-- I'm using Bootstrap 4 for CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  </head>

	<body>
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

    echo "Hi, hopefully this works too."
    $sqlTest = "SELECT Math.DeptHead, Math.DeptHeadEmail, Math.DeptWebsite FROM Math";
    $sqlResult = $conn->query($sqlTest);

    if ($sqlResult->num_rows > 0) {
    while($row = $sqlResult->fetch_assoc()) {
  echo "Department Head: " . $row["DeptHead"]. " - Email: " . $row["DeptHeadEmail"]. " - Department Website: " . $row["DeptWebsite"]. "<br>";
  }
  } else {
    echo "0 results";
  }
  $conn->close();
  ?>
		<div id="main" class="jumbotron text-center">

      <div class="container" id="categoryselect">
		      <h1>Which of the following categories is your question related to? </br></br></h1>

        <!--
        I'm thinking we'll have two different databases of information
        for these categories. For example, each database will have
        a different department head based on the chosen category.
        These are just placeholder for now.
        -->
        <div class="row">
		        <button type="button" onclick="categoryComputerScience()" id="categorycs" class="col-sm">Computer Science</button>
		        <button type="button" onclick="categoryMathematics()" id="categorymath" class="col-sm">Mathematics</button>
        </div>
      </div>

      <div id="inputbox">
        <div id="questiontexthere"></div>
          <input style="display:none" id="input" type="text" placeholder="Enter your response" autocomplete="off"/>
      </div>

		</div>
	</body>

</html>
