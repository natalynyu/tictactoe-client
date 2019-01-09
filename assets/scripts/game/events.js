'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let turn = 1
let over = false
/**
 * This function is intended to be called when the user clicks on a cell.
 * @param {Event} event - the event object
*/
const onBoardClick = (event) => {
  if (over) return
  if ($(event.target).hasClass('cell') && event.target.innerHTML === '') {
    if (turn % 2 === 1) {
      event.target.innerHTML = 'x'
      turn++
      $('#playerIndicator').html('Player 2, it\'s your turn!')
    } else {
      event.target.innerHTML = 'o'
      turn++
      $('#playerIndicator').html('Player 1, it\'s your turn!')
    }
    const currentBoard = createCurrentBoard()
    if (checkForXWin(currentBoard)) {
      $('#playerIndicator').html('Player 1 won!')
      over = true
    } else if (checkForOWin(currentBoard)) {
      $('#playerIndicator').html('Player 2 won!')
      over = true
    } else if (checkForDraw(currentBoard)) {
      $('#playerIndicator').html('It was a draw!')
      over = true
    }
    const id = store.game.id
    const index = event.target.id.slice(1)
    const cellValue = $(event.target).text()
    api.updateGame(id, index, cellValue, over)
    if (over === true) {
      $('#createGame').show()
      turn = 1
    }
  }
}

const winCombinations = [
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0]
]

const createCurrentBoard = () => {
  // Takes divs with class 'cell' to create cells array
  const currentBoard = []
  const cells = $('.cell').toArray()
  for (let i = 0; i < cells.length; i++) {
    currentBoard.push(cells[i].textContent)
  }
  return currentBoard
}

const checkForXWin = (currentBoard) => {
  let matched = false
  for (let i = 0; i < winCombinations.length; i++) {
    matched = true
    for (let j = 0; j < winCombinations[i].length; j++) {
      if (winCombinations[i][j] === 1 && currentBoard[j] !== 'x') {
        matched = false
        break
      }
    }
    if (matched) {
      break
    }
  }
  return matched
}

const checkForOWin = (currentBoard) => {
  let matched = false
  for (let i = 0; i < winCombinations.length; i++) {
    matched = true
    for (let j = 0; j < winCombinations[i].length; j++) {
      if (winCombinations[i][j] === 1 && currentBoard[j] !== 'o') {
        matched = false
        break
      }
    }
    if (matched) {
      break
    }
  }
  return matched
}

const isDraw = board => {
  return board !== ''
}

const checkForDraw = (currentBoard) => {
  return currentBoard.every(isDraw)
}

const onPlay = () => {
  over = false
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFail)
}

const onShowAllGames = () => {
  api.showAllCompletedGames()
    .then(ui.onShowAllGamesSuccess)
    .catch(ui.onShowAllGamesFail)
}

const addGameHandlers = () => {
  $('.container').on('click', onBoardClick)
  $('#createGame').on('click', onPlay)
  $('#showAllGames').on('click', onShowAllGames)
}

module.exports = {
  addGameHandlers
}
