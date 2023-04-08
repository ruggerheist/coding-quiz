let startButton = document.createElement("button");
let questionElement = document.getElementById("questions");
let timerElement = document.querySelector('#time-seconds');
let questionIndex = 0;
let time = 45;
let score = 0;
let scoreElement = document.querySelector('#score');
let boxElement = document.querySelector("#coding-quiz");
let timerInterval = 0;
let timerStarted = false;
let buttonContainer = document.querySelectorAll("button");



for (i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].addEventListener("click", function() {
        if (this.textContent === currentQuestion.correct) {
            score++;
        } else {
         time -=5
        }
        if (questionIndex === questions.length - 1) {
            //endQuiz();
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
startButton.addEventListener("click", function(event){
    console.log(event)
    if(!timerStarted){
        timerStarted = true;
        time = 45;
        timerInterval = setInterval( function() {
            time--;
            timerElement.textContent = `time left: ${time}`;       
        }, 1000)
    } else {
       clearInterval(timerInterval);
       timerStarted = false;      
    }
    startQuiz()

// add high score "local storage" lesson 04-22

})



 function startQuiz(){
    let currentQuestion = questionBoxes[questionIndex];
    let options = options = currentQuestion.options; //console logging error here ive moved these variable all over the code and it errors on different lines
    console.log("start quiz")
    questionIndex = 0;    
    currentQuestion = questions[questionIndex];    
    showQuestion();
}
    

startButton.addEventListener("click", startQuiz);

var questionBoxes = [
    {
        question: "Question 1 Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
        
    },
    
    { 
        question: "Question 2 Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
    },

    {
        question: "Question 3 Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
    },

    {
        question: "Question 4 Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
    },
];


console.log(questionBoxes[0]);


function showQuestion(){
    questionElement.innerHTML = '';
    var question = document.createElement('div');
    question.textContent = currentQuestion.question;
    questionElement.appendChild(question);1
    let options = currentQuestion.options;
    for (i = 0; i < currentQuestion.options.length; i++){
        console.log(options);
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
        })
         questionIndex++;
         scoreElement.textContent = `score: ${score}`;
         timerElement.textContent = `time left: ${time}`;
         if (questionIndex >= questionBoxes.length) {
            // end quiz
         } else {
            showQuestion();
         }
    };
}

/* function endQuiz() {
    clearInterval(timerInterval);
} */


boxElement.style.backgroundColor = "white";
var correctAnswer = ''
var boxIndex = 0;
console.log(boxElement)