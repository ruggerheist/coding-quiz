console.log('Great Success!');
const startButton = document.getElementById("start");
const questionElement = document.getElementById("questions");
let questionIndex = 0;
let countdown = 30;

var boxElement = document.querySelector("#color-flip-box");

function startQuiz(){
    console.log("start quiz")
    setInterval(startTimer, 1000)
    showQuestion();
    questionIndex++;
}
startButton.addEventListener("click", startQuiz);

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


function startTimer(){
    //setInterval(displayHello, 1000);
  var timer = document.getElementById("timer")
  timer.textContent = "Timer " + countdown;
  countdown--;
}
    //clearInterval(startTimer);



/* boxElement.addEventListener("click", function(){
    if(correctAnswer = true){
        boxElement.style.backgroundColor = "green";
        correctAnswer = false;
    } else {
        boxElement.style.backgroundColor = "red";
        correctAnswer = true;
    }

    boxElement.textContent = questionBoxes[boxIndex].name;
    boxIndex++;
    if(boxIndex >= questionBoxes.length){
        boxIndex = 0;
        console.log(boxIndex);
    }
}) */