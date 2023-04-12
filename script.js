let startButton = document.createElement("button");
let questionElement = document.getElementById("questions");
let timerElement = document.querySelector("#time-seconds");
let questionIndex = 0;
let time = 30;
let score = 0;
let scoreElement = document.querySelector("#score");
let boxElement = document.querySelector("#coding-quiz");
let timerInterval = 0;
let timerStarted = false;
let buttonContainer = document.querySelectorAll("#button");
let leaderboardElement = document.querySelector("#leaderboard");

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

scoreElement.textContent = `SCORE: ${score}`;
timerElement.textContent = `TIME LEFT: ${time}`;
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
            timerElement.textContent = `TIME LEFT: ${time}`;
            checkTime();      
        }, 1000);
    } else {
       clearInterval(timerInterval);
       timerStarted = false;      
    }    
    startQuiz();
});

 function startQuiz(currentQuestion){
    questionElement.classList.add("questionElement");
    questionIndex = 0;    
    currentQuestion = questions[questionIndex];    
    showQuestion();
    for (i = 0; i < buttonContainer.length; i++) {
        buttonContainer[i].addEventListener("click", function() {
            if (this.textContent === currentQuestion.correct) {
                score++;
            } else {
             time -=5
            }
            if (questionIndex === questions.length - 1) {
                endQuiz(time);
            } else {
                questionIndex++;
                currentQuestion = questions[questionIndex];
                options = currentQuestion.options;
                showQuestion();
            }
        })
    }
}

startButton.addEventListener("click", startQuiz);

let currentQuestion = questionBoxes[questionIndex];

function showQuestion(){
    questionElement.innerHTML = "";
    var question = document.createElement("div");
    question.textContent = currentQuestion.question;
    questionElement.appendChild(question);
    for (i = 0; i < currentQuestion.options.length; i++){
        var option = document.createElement("button");
        option.classList.add("optionButtons");
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
                endQuiz(time);
            } else {
                currentQuestion = questionBoxes[questionIndex];
                showQuestion();
            }
            scoreElement.textContent = `SCORE: ${score}`;
            timerElement.textContent = `TIME LEFT: ${time}`;
        })
    }             
};

function checkTime() {
    if (time <= 0) {
        endQuiz(0);
    }
};

timerElement.classList.add("timer");
scoreElement.classList.add("score");

function generateLeaderboard(userInfo) {
    if (localStorage.getItem("leaderboard") === null) {
       localStorage.setItem("leaderboard", JSON.stringify([userInfo]));
    } else {    
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    leaderboard.push(userInfo);
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }
    return localStorage;
}

function displayLeaderboard(leaderboard) {    
    var leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    var leaderboardContent = document.createElement("div");
    leaderboardContent.classList.add("leaderboardContent");
    for (i = 0; i < 5 && i < leaderboard.length; i++) {
        leaderboardContent.innerHTML += `</br><p>${leaderboard[i].firstName}: ${leaderboard[i].score}</p>`;
    }    
    leaderboardElement.appendChild(leaderboardContent);
}

function endQuiz(time) {
    clearInterval(timerInterval);
    var gameOver = document.createElement("div");    
    gameOver.classList.add("gameOver");
    questionElement.style.display = "none";
    var firstNameInput = prompt("Please enter your name");    
    var userInfo = { 
        firstName: firstNameInput,
        score: score + time       
      }
    gameOver.innerHTML = `
        <h2 id="">GAME OVER</h2>
        <p>${userInfo.firstName}, Your score is ${userInfo.score}</p><button onclick="location.reload()">Restart</button></p>`
    boxElement.appendChild(gameOver);
    displayLeaderboard(generateLeaderboard(userInfo));
}

boxElement.style.backgroundColor = "white";