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
    "who is the head of the cs department",
    "who is the head of the cs program",
    "who is the head of the computer science program"
  ],
  [
    "who is the head of the mathematics department",
    "who is the head of the math department"
  ],
  [
    "where can i find info on the cs program",
    "where can i find information on the cs program",
    "where can i find info on the computer science program",
    "where can i find information on the computer science program",
    "where can i find info on the cs department",
    "where can i find information on the cs department",
    "where can i find info on the computer science department",
    "where can i find information on the computer science department",
  ],
  [
    "where can i find info on the math department",
    "where can i find information on the math department",
    "where can i find info on the mathematics department",
    "where can i find information on the mathematics department",
  ],
  [
    "where can i find the degree paths for the cs program",
    "where can i find the degree paths for the computer science program",
    "where can i find the degree paths for the cs department",
    "where can i find the degree paths for the computer science department"
  ],
  [
    "where can i find the course rotation for the cs program",
    "where can i find the course rotation for the computer science program",
    "where can i find the course rotation for the cs department",
    "where can i find the course rotation for the computer science department"
  ],
  [
    "where can i find the course rotation for the math department",
    "where can i find the course rotation for the mathematics department"
  ],
  [
    "where can i find the degree paths for the math department",
    "where can i find the degree paths for the mathematics department"
  ],
  [
    "where can i find the directory for the cs program",
    "where can i find the directory for the computer science program",
    "where can i find the directory for the cs department",
    "where can i find the directory for the computer science department"
  ],
  [
    "where can i find the directory for the math department",
    "where can i find the directory for the mathematics department"
  ],
  [
    "where can i contact the cs program",
    "where can i contact the computer science program",
    "where can i contact the cs department",
    "where can i contact the computer science department",
  ],
  [
    "where can i contact the math department",
    "where can i contact the mathematics department",
  ],
  [
    "where can i find cs graduate information",
    "where can i find computer science graduate information",
    "where can i find graduate information for the cs program",
    "where can i find graduate information for the computer science program"
  ],
  [
    "where can i find math graduate information",
    "where can i find mathematics graduate information",
    "where can i find graduate info for math department",
    "where can i find graduate info for the mathematics department"
  ],
  [
    "what college is the cs program in",
    "what college is the computer science program in",
  ],
  [
    "what college is the math department in"
    "what college is the mathematics department in"
  ],
  ["im satisfied"],
  ["im unsatisfied"]
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
    "yeet!"
  ],
  ["The head of the computer science program is Dr. Huanjing Wang."],
  ["The head of the mathematics department is Dr. Bruce Kessler."],
  ["The CS Program website can be found at https://www.wku.edu/cs/"],
  ["The Math department's website is: https://www.wku.edu/math"],
  ["You can find the CS Degree Paths at https://www.wku.edu/cs/student_resouces/four_year_plan.php"],
  ["You can find the Math Degree Paths at: https://catalog.wku.edu/undergraduate/science-engineering/mathematics/#programstext"],
  ["You can find the CS Course Rotation at: https://wku.edu/cs/student_resources/undergraduate_rotation.php"],
  ["You can find the Math Course Rotation at: https://www.wku.edu/math/courserotation.php"],
  ["The CS Program Directory can be found at https://wwww.wku.edu/cs/staff/staff.php"],
  ["The Math Department's Directory can be found at: https://www.wku.edu/math/staff/index.php"],
  ["Contact the CS Program at https://www.wku.edu/cs/contacts.php"],
  ["Contact the Math Department at: https://www.wku.edu/math/contact_us.php"],
  ["Graduate Info can be found here: https://wwww.wku.edu/csgraduate/index.php"],
  ["Graduate information can be found here: https://www.wku.edu/math/math_graduate_booklet_2016.pdf"],
  ["The CS Program is a part of the School of Engineering and Applied Sciences (SEAS), Learn more about SEAS at https://www.wku.edu/seas/"],
  ["The Math Department is a part of the Ogden College of Science and Engineering (OCSE), You can find more information about OCSE at: https://www.wku.edu/ogden/"],



  ["We're glad you're satisfied! If you have any more questions, feel free to ask. Otherwise, have a great day!"],
  ["Sorry you're unsatisfied. Is there anything else you want to know?"]
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
    // makes the satisfaction question visible
    var satisfquest = document.getElementById("satisfactionquestion");
    satisfquest.style.visibility='visible';
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

// checks if user is satisfied with Chatbot response
function satisfaction(status) {
  if (status=='sat') {
    var input = "I'm satisfied";
  }
  else {
    var input = "I'm unsatisfied";
  }
  output(input);
}
