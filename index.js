//To Do Grab the Score board ID 
// Create a functions for each button 
let redScore = 0
let blueScore = 0
//patch score id
let red = document.getElementById("red-team") 
let blue = document.getElementById("blue-team")

red.textContent = redScore
blue.textContent = blueScore

// Red Team
function addRed1(){
    redScore += 1
    red.textContent = redScore
}
function addRed2(){
    redScore += 2
    red.textContent = redScore
}
function addRed3(){
    redScore += 3
    red.textContent = redScore
}

//Blue Team
function addBlue1(){
    blueScore += 1
    blue.textContent = blueScore
}
function addBlue2(){
    blueScore += 2
    blue.textContent = blueScore
}
function addBlue3(){
    blueScore += 3
    blue.textContent = blueScore
}

// Reset the score to zero when clicked on reset button
function resetBlueScore(){
    blueScore = 0 
    blue.textContent = blueScore
}
function resetRedScore(){
    redScore = 0 
    red.textContent = redScore
}