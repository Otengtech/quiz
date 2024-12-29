const questions = [
  {
    question: "Question 1 : What is the chemical symbol for water?",
    answers: ["H2O", "O2", "CO2", "H2"],
    correct: 0,
  },
  {
    question: "Question 2 : What planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "Question 3 : What is the hardest natural substance on Earth?",
    answers: ["Gold", "Diamond", "Iron", "Platinum"],
    correct: 1,
  },
  {
    question: "Question 4 : How many bones are in the adult human body?",
    answers: ["206", "208", "207", "205"],
    correct: 0,
  },
  {
    question: "Question 5 : Which gas do plants absorb from the atmosphere for photosynthesis?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 1,
  },
  {
    question: "Quesion 6 : What is the speed of light?",
    answers: ["300,000 km/s", "250,000 km/s", "310,000 km/s", "320,000 km/s"],
    correct: 0,
  },
  {
    question: "Quesion 7 : Who developed the theory of relativity?",
    answers: [
      "Isaac Newton",
      "Nikola Tesla",
      "Albert Einstein",
      "Galileo Galilei",
    ],
    correct: 2,
  },
  {
    question: "Quesion 8 : What is the powerhouse of the cell?",
    answers: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    correct: 1,
  },
  {
    question: "Quesion 9: Which element is most abundant in Earth's crust?",
    answers: ["Oxygen", "Iron", "Silicon", "Carbon"],
    correct: 0,
  },
  {
    question: "Quesion 10 : What is the most common blood type in humans?",
    answers: ["A", "B", "O", "AB"],
    correct: 2,
  },
  {
    question: "Quesion 11 : What is the boiling point of water?",
    answers: ["100°C", "90°C", "110°C", "200°C"],
    correct: 0,
  },
  {
    question: "Quesion 12 : Which planet is closest to the sun?",
    answers: ["Earth", "Mercury", "Venus", "Mars"],
    correct: 1,
  },
  {
    question: "Quesion 13 : What type of animal is a frog?",
    answers: ["Mammal", "Reptile", "Amphibian", "Bird"],
    correct: 2,
  },
  {
    question: "Quesion 14 : Which part of the plant conducts photosynthesis?",
    answers: ["Root", "Stem", "Leaf", "Flower"],
    correct: 2,
  },
  {
    question: "Quesion 15 : What is the chemical formula for methane?",
    answers: ["CH4", "C2H6", "CO2", "C4H10"],
    correct: 0,
  },
  {
    question: "Quesion 16 : What is the largest organ in the human body?",
    answers: ["Heart", "Liver", "Skin", "Brain"],
    correct: 2,
  },
  {
    question: "Quesion 17 : What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Pb", "Fe"],
    correct: 0,
  },
  {
    question: "Quesion 18 : What is the main source of energy for the Earth?",
    answers: ["The Moon", "The Sun", "Wind", "Geothermal Heat"],
    correct: 1,
  },
  {
    question: "Quesion 19 : What gas do humans breathe in for respiration?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correct: 0,
  },
  {
    question: "Quesion 20 : How many planets are in the solar system?",
    answers: ["8", "9", "10", "7"],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;
  const answerButtons = document.querySelectorAll(".answer");

  question.answers.forEach((answer, index) => {
    answerButtons[index].innerText = answer;
    answerButtons[index].disabled = false;
  });
}

function checkAnswer(index) {
  const question = questions[currentQuestionIndex];
  const answerButtons = document.querySelectorAll(".answer");

  if (index === question.correct) {
    score++;
  }

  document.querySelector(".score").innerText = score;
  document.getElementById("next-button").style.display = "inline-block";

  // Disable all buttons after answering
  answerButtons.forEach((button) => (button.disabled = true));
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById("next-button").style.display = "none";
  } else {
    displayScore();
  }
}

function displayScore() {
  const quizBody = document.querySelector(".quizBody");
  const scoreBord = document.getElementById("quiz-container");
  
  scoreBord.innerHTML = `
    <div class="flex flex-col p-4 w-full items-center justify-center h-40">
        <h1 class="text-lg font-bold mb-4 text-xl">Quiz Finished!</h1>
        <p class="text-xl mb-4">Your score: ${score} out of ${questions.length}</p>
        <div class="w-full text-center">
            <button class="py-2 px-6 duration-300 hover:bg-slate-800 text-white text-lg rounded-full bg-slate-900">
              <a href="index.html">RETRY</a>
            </button>
        </div>
    </div>
  `;
  quizBody.innerHTML = scoreBord.innerHTML;
}

// Initialize the quiz
loadQuestion();
