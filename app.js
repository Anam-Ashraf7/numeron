// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
let playBtn = document.querySelector("#play-button")
playBtn.addEventListener("click", () => {
    window.open("game.html")
})