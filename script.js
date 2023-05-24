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
  ];
  
  var score = 0;
  
  function play(question, answer) {
    var userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) {
      console.log("You are right!");
      score = score + 1;
    } else {
      console.log("You are wrong!");
    }
    console.log("Your score is ", score);
    console.log("--------------------");
  }
  
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
  
  console.log("Your total score is ", score);
  
  // Update score in HTML
  document.getElementById("score").textContent = score;
  