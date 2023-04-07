console.log('Great Success!');
let startButton = document.createElement("button");
let questionElement = document.getElementById("questions");
let timerElement = document.querySelector('#time-seconds');
let questionIndex = 0;
let time = 45;
let score = 0;
let scoreElement = document.querySelector('#score');
let boxElement = document.querySelector("#coding-quiz");
let timerInterval = 0;

scoreElement.textContent = `score: ${score}`;

timerElement.textContent = `time left: ${time}`;

timerInterval = setInterval( function() {
    time--;
    timerElement.textContent= `time left: ${time}`;
}, 1000)

startButton.setAttribute("type", "button");
startButton.classList.add("btn");
startButton.classList.add("btn-primary");
startButton.textContent = "Start/Stop Button";

document.querySelector("#main-space").appendChild(startButton);
startButton.addEventListener("click", function(){
    var state = document.querySelector("#time-seconds").dataset.state;
    if(state === "started"){
        document.querySelector("#time-seconds").dataset.state = "stopped";
        clearInterval(timerInterval);
    } else {
        document.querySelector("#time-seconds").dataset.state = "started";
        time = 45;
        timerInterval = setInterval( function() {
            time--;
            timerElement.textContent = `time left: ${time}`;       
        }, 1000)
    }

// add high score "local storage" lesson 04-22

})


/* function startQuiz(){
    console.log("start quiz")
    setInterval(startTimer, 1000)
    showQuestion();
    questionIndex++;
} */
//startButton.addEventListener("click", startQuiz);

var questionBoxes = [
    {
        questionHead: "Question 1",
        questionText: "Question Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
        
    },
    
    { 
        questionHead: "Question 2",
        questionText: "Question Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
    },

    {
        questionHead: "Question 3",
        questionText: "Question Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
    },

    {
        questionHead: "Question 4",
        questionText: "Question Text",
        options: ["Red", "Blue", "Yellow"],
        correct: "Blue",
    },
];


console.log(questionBoxes[0]);

function showQuestion(){
    questionElement.textContent = questionBoxes[questionIndex].questionHead; // wont display all content of object
    for (i = 0; i < questionBoxes[questionIndex].options; i++){
        console.log(questionBoxes[questionIndex].options);
    }
}



boxElement.style.backgroundColor = "white";
var correctAnswer = ''
var boxIndex = 0;
console.log(boxElement)