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
  var currentQuestionIndex = 0;
  var questionsContainer = document.getElementById("questions-container");
  var scoreElement = document.getElementById("score");
  
  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
      <p>${currentQuestion.question}</p>
      <input type="text" id="user-answer" placeholder="Enter your answer" />
      <button onclick="checkAnswer()">Submit</button>
    `;
    questionsContainer.appendChild(questionElement);
  }
  
  function checkAnswer() {
    var userAnswer = document.getElementById("user-answer").value.toLowerCase();
    var currentQuestion = questions[currentQuestionIndex];
    if (userAnswer
  