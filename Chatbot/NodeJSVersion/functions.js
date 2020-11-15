var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db_container",
  user: "root",
  password: "secret",
  database: "chatbot"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Math", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

// Possible questions from the user
// These always need to be in lowercase
// due to how text parsing is handled
const question = [
  [
    "hi",
    "hello"
  ],
  [
    "who is the head of the computer science department",
    "who is the head of the cs department"
  ],
  [
    "who is the head of the mathematics department",
    "who is the head of the math department"
  ]
];


// Corresponding answers to the questions from the user
// For example, question[1] corresponds to answer[1]
const answer = [
  [
    "Hello world!",
    "Welcome!",
    "Hi",
    "Howdy",
    "Hey, what's up?",
  ],
  ["The head of the computer science department is Dr. Huanjing Wang."],
  ["The head of the mathematics department is Dr. Bruce Kessler."]
];

// Error response output to the user if the question isn't found
const error = [
  "I didn't understand you.",
  "Please try again.",
  "Try phrasing your response as a question."
];

// Grabs the textbox input from the user when the enter key is pressed.
document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			let input = inputField.value;
			inputField.value = "";
			output(input);
    }
  });
});

// If the user selects the computer science category
function categoryComputerScience() {
  var showChatbox = document.getElementById("input");
  showChatbox.style.display = 'inline';

  var categoryCs = document.getElementById("categoryselect");
  categoryCs.style.display = 'none';

  var questionText = document.createElement("h1");
  questionText.innerHTML = "Please ask your computer science question.";

  var questionFormat = document.createElement("p");
  questionFormat.innerHTML = "Start your question with a question word (who, what, when, where, why, or how) for best results.";

  document.getElementById("questiontexthere").appendChild(questionText);
  document.getElementById("questiontexthere").appendChild(questionFormat);
}

// If the user selects the mathematics category
function categoryMathematics() {
  var showChatbox = document.getElementById("input");
  showChatbox.style.display = 'inline';

  var categoryMath = document.getElementById("categoryselect");
  categoryMath.style.display = 'none';

  var questionText = document.createElement("h1");
  questionText.innerHTML = "Please ask your mathematics question.";

  var questionFormat = document.createElement("p");
  questionFormat.innerHTML = "Start your question with a question word (who, what, when, where, why, or how) for best results.";

  document.getElementById("questiontexthere").appendChild(questionText);
  document.getElementById("questiontexthere").appendChild(questionFormat);
}
// keeps track of number of failures in answering a certain question
let errorCnt=0;
function output(input) {
  let product;


  // Transforms whatever the user inputs to lowercase
  // and removes anything that isn't a word, space, or digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");;

  // Searches for an exact match with the 'question' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random error
  if (compare(question, answer, text)) {
    product = compare(question, answer, text);
    errorCnt=0;
  } else {
    // if number of failures exceeds 3, give up and redirect user to wku website
    if(errorCnt>2) {
      product = "I'm not sure how to answer your question. Try visiting wku.edu";
    }
    else {
      product = error[Math.floor(Math.random() * error.length)];
      errorCnt++;
    }
  }

  // Add the text to the conversation transcript
  addChat(input, product);
}

function compare(questionArray, answerArray, string) {
  let item;
  for (let x = 0; x < questionArray.length; x++) {
    for (let y = 0; y < answerArray.length; y++) {
      if (questionArray[x][y] == string) {
        items = answerArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

// Outputs the text to the screen
function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
}
