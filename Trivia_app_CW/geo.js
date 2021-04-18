const question = document.getElementById('question');
// manipulating DOM to change questions dynamically
const questionChoice = Array.from(document.getElementsByClassName('q-text'));
const questionNumberText = document.getElementById("questionNumber")
const scoreText = document.getElementById("score")


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let numOfQuestions = 0;
let availableQuesions = [];

let questions = [];

fetch(
"https://opentdb.com/api.php?amount=15&category=22&difficulty=easy&type=multiple"
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };
// randomizing answer positioning
            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });


//CONSTANTS
const CORRECT_ANSWER = 1;
const NUM_OFQ = 10;

//staring the game
startGame = () => {
    numOfQuestions = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestions();
};

getNewQuestions = () => {
    if (availableQuesions.length === 0 || numOfQuestions >= NUM_OFQ) {
    localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign('finish_page.html');
    }

    numOfQuestions++;
    questionNumberText.innerText = numOfQuestions + "/" + NUM_OFQ;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    questionChoice.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};


questionChoice.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

if (classToApply === "correct"){
  scoreCounter(CORRECT_ANSWER);
}

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestions();
    }, 500);
  });
});

// Increases score based on correct answer
scoreCounter = num => {
  score += num;
  scoreText.innerText = score;
};


// calling to start the game
// startGame();
