//Variables
let hand = ["rock", "paper", "scissors"]
let userPick = []
let cpuPick = []
let userScore = 0
let cpuScore = 0
const userWin = "You win!"
const cpuWin = "Computer wins!"
const rule1 = "Rock smashes Scissors."
const rule2 = "Paper covers Rock."
const rule3 = "Scissors cuts Paper."
const rule4 = "It's a tie, play again!"
const textEl = document.getElementById("text-el") 
const userScoreEl = document.getElementById("userScore-el")
const cpuScoreEl = document.getElementById("cpuScore-el")
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const resetBtn = document.getElementById("reset-btn")
//Functions for users choice buttons
rockBtn.addEventListener("click", function() {
    userPick = hand[0]
    renderGame()
})
paperBtn.addEventListener("click", function() {
    userPick = hand[1]
    renderGame()
})
scissorsBtn.addEventListener("click", function() {
    userPick = hand[2]
    renderGame()
})
resetBtn.addEventListener("click", function() {
    location.reload()
})
//Generate random number and alert computers choice
function randomNum() {
    let number = Math.floor(Math.random() * 3)
    cpuPick = hand[number]
    alert(`Computer chose ${cpuPick}`)
}
//User wins logic
function renderGame() {
    randomNum()
    if (userPick === "rock" && cpuPick === "scissors") {
        textEl.textContent = `${userWin} ${rule1}`
        userScore++
        userScoreEl.textContent = `Your score: ${userScore}`
    } else if (userPick === "paper" && cpuPick === "rock") {
        textEl.textContent = `${userWin} ${rule2}`
        userScore++
        userScoreEl.textContent = `Your score: ${userScore}`
    } else if (userPick === "scissors" && cpuPick === "paper") {
        textEl.textContent = `${userWin} ${rule3}`
        userScore++
        userScoreEl.textContent = `Your score: ${userScore}`
    } 
    // Computer wins logic
    else if (cpuPick === "rock" && userPick === "scissors") {
        textEl.textContent = `${cpuWin} ${rule1}`
        cpuScore++
        cpuScoreEl.textContent = `Computers score: ${cpuScore}`
    } else if (cpuPick === "paper" && userPick === "rock") {
        textEl.textContent = `${cpuWin} ${rule2}`
        cpuScore++
        cpuScoreEl.textContent = `Computers score: ${cpuScore}`
    } else if (cpuPick === "scissors" && userPick === "paper") {
        textEl.textContent = `${cpuWin} ${rule3}`
        cpuScore++
        cpuScoreEl.textContent = `Computers score: ${cpuScore}`
    } else {
        textEl.textContent = rule4
    }
}


 
        

