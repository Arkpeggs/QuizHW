// var declaration

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var questionText = document.getElementById("questionText")
var timer = document.querySelector("#time");
var messageDiv = document.querySelector("#footer");
var i = 0;
var score = 0;
var secondsLeft = 100;
var storedScores;
var scoreList = [];

//when the window loads, timer will be set, question will be displayed and an empty string for footer
window.addEventListener('load', questionPicker);
window.addEventListener('load', setTime);
window.addEventListener('load', function () {
    messageDiv.textContent = "";
});


// questions and answers
var questions = [
    {
        title: "Which of the following will NOT create a loop?",
        choices: ["loop", "do", "for", "while"],
        answer: "loop"
    },

    {
        title: "A _________ is an object of the target language data type that encloses an object of the source language.",
        choices: ["closer", "belt", "casing", "wrapper"],
        answer: "wrapper"
    },

    {
        title: "Which HTML tag enables JavaScript?",
        choices: ["<js>", "<src>", "<script>", "<div>"],
        answer: "<script>"
    },

    {
        title: "How do you create an object?",
        choices: ["var obj = {};", "function Foo() {} var obj = new Foo();", "var obj = new Object();", "All of the above"],
        answer: "All of the above"
    },

    {
        title: "Which event fires whenever the page loads?",
        choices: ["onload", "onrefresh", "onopen", "onstart"],
        answer: "onload"
    },

    {
        title: "Which of the following operators can assign a value to a variable?",
        choices: ["=", "%=", "+=", "All of the above"],
        answer: "All of the above"
    },

    {
        title: "What is the correct syntax for a comment?",
        choices: ["./", "//", "<-->", "<>"],
        answer: "//"
    },

    {
        title: "What does variable++ do? ?",
        choices: ["Returns an error to the browser", "Adds the value of “variable” to itself", "Increments the value of “variable” but returns the previous value", "Returns a value 1 greater than “variable” without changing its value"],
        answer: "Increments the value of “variable” but returns the previous value"
    },

    {
        title: "Which of these is not a built-in object constructor?",
        choices: ["Date", "Time", "Array", "RegExp"],
        answer: "Time"
    },

    {
        title: "The Math.mul( ) method... ",
        choices: ["Returns an interger multiplied by x", "Returns the largest integer less than or equal to x.", "Does not exist", "Returns the hyperbolic tangent of x."],
        answer: "Does not exist"
    },
];

// timer function 

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}

// this will erase the questions and answers so an input field and submit button wil display
function questionEnder() {

    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    score += secondsLeft * .1;
    score = score.toFixed(2);
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    messageDiv.textContent = "Enter your name";
    questionText.remove();
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
        window.location.href = "./scoreboard.html";
    });
}
// Funstion to display the questions and answers
function questionPicker() {


    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("questionText").textContent = questions[i]["title"];
        document.getElementById("answer1").textContent = questions[i]["choices"][0];
        document.getElementById("answer2").textContent = questions[i]["choices"][1];
        document.getElementById("answer3").textContent = questions[i]["choices"][2];
        document.getElementById("answer4").textContent = questions[i]["choices"][3];
    }
}

//score functionality, included storage.
function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}


//if else on answer buttons to determine wrong and right answers

document.getElementById("answer1").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score +1;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionPicker();
})

document.getElementById("answer2").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score +1;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionPicker();
})

document.getElementById("answer3").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score +1;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionPicker();
})

document.getElementById("answer4").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score +1;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionPicker();
})

