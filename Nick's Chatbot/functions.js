//Possible subjects of a question the user can ask
const subjects = [
  [
    "hi",
    "hello"
  ],
  [
    "cs",
    "computer science",
    "computerscience",
    "cs department",
    "computer science department"
  ],
  [
    "head"
  ],
  [
    "courses",
    "course",
    "class",
    "classes"
  ],
  [
    "advisor"
  ]
];

//Possible questions
const query = ["who", "what", "when", "where", "why", "how"]

// Error response output to the user if the question isn't found
const error = [
  "Sorry, I didn't understand you. Could you say again?",
  "Sorry; I don't know what that means.",
  "Sorry; Could you rephrase your question?",
  "It seems I can't help. Perhaps try this website: "
];

// Grabs the textbox input from the user when the enter key is pressed.
document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			var input = inputField.value;
			inputField.value = "";
      parseText(input);
    }
  });
});

function parseText(input) {

  // Transforms whatever the user inputs to lowercase
  // and removes anything that isn't a word, space, or digits

  var text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  var subject, questionID, i, j;

  for(i = 0; i < subjects.length; ++i) {
    for(j = 0; j < subjects[i].length; ++j) {

      if(text.includes(subjects[i][j])) {
        subject = subjects[i][j];
        break;
      }

    }
  }

  for(var k = 0; k < query.length; ++k) {
    if(text.includes(query[k])) {
      questionID = query[k];
    }
  }

  if(subject != null && questionID != null) {
    addChat(text, subject, questionID);
  } else {
    addChat(text, error[0], "");
  }
}

// Outputs the text to the screen
function addChat(userInput, subject, qID) {
  var chatLog = document.getElementById("chat");

  var appendThisUser = document.createElement("p");
  appendThisUser.setAttribute("style", "text-align:right");
  var userResponse = document.createTextNode(userInput)
  appendThisUser.appendChild(userResponse);
  chatLog.append(appendThisUser);

  var appendThis = document.createElement("p");
  var response = document.createTextNode(subject + " " + qID);
  appendThis.appendChild(response);
  chatLog.append(appendThis);
}