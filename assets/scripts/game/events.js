'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

let turn = 1
/**
 * This function is intended to be called when the user clicks on a cell.
 * @param {Event} event - the event object
*/
const placeMarker = (event) => {
  if ($(event.target).hasClass('cell')) {
    if (turn % 2 === 1) {
      event.target.innerHTML = 'x'
      turn++
      $('#playerIndicator').html('Player 2, it\'s your turn!')
    } else {
      event.target.innerHTML = 'o'
      turn++
      $('#playerIndicator').html('Player 1, it\'s your turn!')
    }
  }
  if (checkForXWin()) {
    console.log('Player 1 won!')
    // $('.container').off('click')
  } else if (checkForOWin()) {
    console.log('Player 2 won!')
    // $('.container').off('click')
  } else if (checkForDraw()) {
    console.log('It was a draw!')
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

const currentBoard = createCurrentBoard()

const checkForXWin = () => {
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

const checkForOWin = () => {
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

const checkForDraw = () => {
  (currentBoard.every(isDraw))
}

const addGameHandlers = () => {
  $('.container').on('click', placeMarker)
}

module.exports = {
  addGameHandlers
}
