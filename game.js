// Iteration 2: Generate 2 random number and display it on the screen

let score = 0
let firstNum = document.querySelector("#number1")
let secondNum = document.querySelector("#number2")
let buttons = document.getElementById("buttons")
let number1;
let number2;
let timer = document.getElementById("timer")


function randomNumbers(){
    return Math.floor(Math.random()*100) + 1
}



function displayRandomNumbers() {
    number1 = randomNumbers()
    number2 = randomNumbers()
    firstNum.innerHTML = number1
    secondNum.innerHTML = number2
    
}


// Iteration 3: Make the options button functional

buttons.addEventListener("click", (e) => {
    compareNumbers(e.target.id)
})

//comparing two numbers

function compareNumbers(operation) {
    if(operation=="greater-than" && number1 > number2 || operation=="equal-to" && number1 == number2 || operation=="lesser-than" && number1 < number2) {
        score++
        displayRandomNumbers()
        time = 5
    } else {
        gameOver()
    }
}

displayRandomNumbers()


// Iteration 4: Build a timer for the game
let time = 5
function stopWatch() {
    if(time <= 0) {
        location.href = "gameover.html"
    }
    timer.innerText = time
    time--
}

setInterval(stopWatch,1000)

function gameOver() {
    location.href = "gameover.html"
    localStorage.setItem("score",score)
}