var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ")

score = 0

console.log("welcome " + userName + " to DO YOU KNOW Faraaz?")

// play function

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("You are wrong!")
  }
  console.log("Your score is ", score)
  console.log("--------------------")
}

// play("Where do I live? ","Bangalore")
// play("Who is my favorite superher? ", "batman")

// array of objects

var questions = [
  {
    question: "Where do I live? ",
    answer: "bangalore"
  },
  {
    question: "Who is my favorite superhero? ",
    answer: "batman"
  },
  {
    question: "What do I want to be in life? ",
    answer: "successful"
  },
  {
    question: "What are you learning? ",
    answer: "web development"
  }
]

// loop

for (i=0; i < questions.length; i=i+1) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your total score is ", score)