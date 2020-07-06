const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBINATION = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const cellElements = document.querySelectorAll('[data-cell]')
const playButton= document.getElementById('startButton')
const playTurn= document.getElementById('pturn')
const playerForm= document.getElementById('players')
const board = document.getElementById('board')
const playerTurnTextElement=document.querySelector('[data-player-turn-text]')
const winningMessageElement= document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement=document.querySelector('[data-winning-message-text]')
let oTurn
var p1 = document.getElementById('playername1').value
var p2 = document.getElementById('playername2').value
console.log(p1);
console.log(p2);


//setting initial hoaver effect
//startGame()
////playButton.addEventListener('click', setBoardHoaver)
//
//function startGame() {
//  oTurn = false
//  playerForm.classList.remove('hide')
reloadBoard();

restartButton.addEventListener('click', reloadBoard)

function reloadBoard() {
  playButton.removeEventListener('click', startGame, {once:true})
  playerForm.classList.remove('hide')
  document.getElementById("playform").reset()
  playerTurnTextElement.innerText = ''
  cellElements.forEach(cell=>{
    cell.classList.remove(O_CLASS)
    cell.classList.remove(X_CLASS)
  })
  board.classList.remove(X_CLASS)
  board.classList.remove(O_CLASS)
  playButton.addEventListener('click', startGame, {once:true})
  winningMessageElement.classList.remove('show')
}

playButton.addEventListener('click', startGame, {once:true})
function startGame() {
  playerForm.classList.add('hide')
  playerTurnTextElement.innerText = "X turn"
  cellElements.forEach(cell=>{
    cell.classList.remove(O_CLASS)
    cell.classList.remove(X_CLASS)
    cell.removeEventListener('click', handleClick, {once:true})
    cell.addEventListener('click', handleClick, {once:true})
  })
  //playButton.addEventListener('click', setBoardHoaver)
  setBoardHoaver()
  //winningMessageElement.classList.remove('show')
}


function handleClick(e){

  const cell = e.target
  const currentClass = oTurn? O_CLASS : X_CLASS

  //place the mark
  placeMark(cell, currentClass)

  //look for win
  if (checkWin(currentClass)) {
    endGame(false)
  }
  else if (isDraw()) {
    endGame(true)
  }else {
   swapTurns()
  setBoardHoaver()
  }

}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = oTurn ? "O wins" : "X wins" //Wins!'
  }

  winningMessageElement.classList.add('show')

}

function isDraw() {
  return [...cellElements].every(cell => {return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)})
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)

}

function swapTurns(){
  //playerTurnTextElement.innerHTML = oTurn ? '<?php echo json_encode($p1) ; ?>' : '<?php echo json_encode($p2) ; ?>';
  playerTurnTextElement.innerHTML = oTurn ? p1 : p2
  oTurn = !oTurn
}

function setBoardHoaver() {

  board.classList.remove(X_CLASS)
  board.classList.remove(O_CLASS)
  if (oTurn) {
    board.classList.add(O_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }

}

function checkWin(currentClass) {
  return WINNING_COMBINATION.some(combination => {
    return combination.every(index => {return cellElements[index].classList.contains(currentClass)})
  })
}
