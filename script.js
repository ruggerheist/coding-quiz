let startButton = document.createElement("button");
let questionElement = document.getElementById("questions");
let timerElement = document.querySelector('#time-seconds');
let questionIndex = 0;
let time = 30;
let score = 0;
let scoreElement = document.querySelector('#score');
let boxElement = document.querySelector("#coding-quiz");
let timerInterval = 0;
let timerStarted = false;
let buttonContainer = document.querySelectorAll("button");

var questionBoxes = [
    {
        question: "JavaScript variables can be defined with the following except: ",
        options: ["var", "def", "const", "let"],
        correct: "def",
        
    },
    
    { 
        question: "CSS stylesheets should be linked in the...",
        options: ["body", "form", "head", "header"],
        correct: "head",
    },

    {
        question: "In CSS an ID is called with what?",
        options: [".", "by name", "id=", "#"],
        correct: "#",
    },

    {
        question: "How is strict equality expressed?",
        options: ["=", "===", "+==", "==+"],
        correct: "===",
    },

    {
        question: "What is NOT a Pseudo Element Postion",
        options: ["Global", "Fixed", "Static", "Absolute"],
        correct: "Global",
    },

    {
        question: "What does git provide?",
        options: ["coding", "website", "crypto", "version control"],
        correct: "version control",
    },
];

let options = questionBoxes[questionIndex].options;

for (i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].addEventListener("click", function() {
        if (this.textContent === currentQuestion.correct) {
            score++;
        } else {
         time -=5
        }
        if (questionIndex === questions.length - 1) {
            endQuiz();
        } else {
            questionIndex++;
            currentQuestion = questions[questionIndex];
            options = currentQuestion.options;
            showQuestion();
        }
    })
}

scoreElement.textContent = `score: ${score}`;
timerElement.textContent = `time left: ${time}`;
startButton.setAttribute("type", "button");
startButton.classList.add("btn");
startButton.classList.add("btn-primary");
startButton.textContent = "Start/Stop Button";

document.querySelector("#main-space").appendChild(startButton);
startButton.addEventListener("click", function(){   
    if(!timerStarted){
        timerStarted = true;
        time = 30;
        timerInterval = setInterval( function() {
            time--;
            timerElement.textContent = `time left: ${time}`;
            checkTime()       
        }, 1000)
    } else {
       clearInterval(timerInterval);
       timerStarted = false;      
    }    
    startQuiz()

// add high score "local storage" lesson 04-22 score + time remaining

})



 function startQuiz(currentQuestion){
    questionIndex = 0;    
    currentQuestion = questions[questionIndex];    
    showQuestion();
}
    

startButton.addEventListener("click", startQuiz);
let currentQuestion = questionBoxes[questionIndex]

function showQuestion(){
    questionElement.innerHTML = '';
    var question = document.createElement('div');
    question.textContent = currentQuestion.question;
    questionElement.appendChild(question);
    let options = currentQuestion.options;
    for (i = 0; i < currentQuestion.options.length; i++){
        var option = document.createElement('button');
        option.textContent = currentQuestion.options[i];
        questionElement.appendChild(option);
        option.addEventListener("click", function(){
            console.log(currentQuestion.correct);
            if (this.textContent === currentQuestion.correct){
                score++
            } else {
                time -= 5;
            }
            questionIndex++;
            if (questionIndex >= questionBoxes.length) {
                endQuiz();
            } else {
                currentQuestion = questionBoxes[questionIndex];
                showQuestion();
            }
            scoreElement.textContent = `score: ${score}`;
            timerElement.textContent = `time left: ${time}`;
        })
    }             
}// quiz needs to end when timer hits 0 even if questions arent answered. Game Over alert

function checkTime() {
    if (time === 0) {
        endQuiz()
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    var gameOver = document.createElement("div");
    gameOver.innerHTML = `
        <h2>GAME OVER</h2>
        <p>Your Score is ${score}</p><button onclick="location.reload()">Restart</button></p>
    `;
    boxElement.appendChild(gameOver);
}

boxElement.style.backgroundColor = "white";
var correctAnswer = ''
var boxIndex = 0;
console.log(boxElement)