// Iteration 5: Store the player score and display it on the game over screen
const score_board = document.getElementById("score-board")
score_board.innerText = localStorage.getItem("score")

let playAgainBtn = document.getElementById("play-again-button")
playAgainBtn.addEventListener("click", () => {
    location.href = "game.html"
})

