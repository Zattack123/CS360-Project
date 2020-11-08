<?php
//require "db_connect.php"
?>


<html lang="en">

  <head>
    <title>Chatbot</title>
		<script type="text/javascript" src="functions.js"></script>
    <!-- I'm using Bootstrap 4 for CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  </head>

	<body>
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
