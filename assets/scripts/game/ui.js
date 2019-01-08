'use strict'

const store = require('../store')

// Create game success/fail UI
const onCreateGameSuccess = (responseData) => {
  store.game = responseData.game
  console.log(responseData)
  $('.container').show()
  $('#gameInfo').show()
  $('#createGame').hide()
  $('#signin-message').hide()
  $('.cell').html('')
  $('#playerIndicator').text('Player 1, it\'s your turn!')
}
const onCreateGameFail = () => {
  $('#createGame-message').text('There was an error with starting the game. Please try again.')
}
// Show all games success/fail UI
const onShowAllGamesSuccess = () => {
  $('#allGames-message').text('Successfully showed all games below.')
}
const onShowAllGamesFail = () => {
  $('#allGames-message').text('There was an error with showing all games. Please try again.')
}
// Show completed games success/fail UI
const onShowCompletedGamesSuccess = () => {
  $('#completedGames-message').text('Successfuly showed completed games below.')
}
const onShowCompletedGamesFail = () => {
  $('#completedGames-message').text('There was an error with showing the completed games. Please try again.')
}
// Show one games success/fail UI
const onShowOneGameSuccess = () => {
  $('#showGame-message').text('Successfully showed game.')
}
const onShowOneGameFail = () => {
  $('#showGame-message').text('There was an error with showing the game. Please try again.')
}
const onUpdateGameSuccess = (id, value) => {
  event.preventDefault()
  store.game.id = id
  store.game.value = value
}
const onUpdateGameFail = () => {
  $('#updateGame-message').text('There was an error with updating the game. Please try again.')
}
module.exports = {
  onCreateGameSuccess,
  onCreateGameFail,
  onShowAllGamesSuccess,
  onShowAllGamesFail,
  onShowCompletedGamesSuccess,
  onShowCompletedGamesFail,
  onShowOneGameSuccess,
  onShowOneGameFail,
  onUpdateGameSuccess,
  onUpdateGameFail
}
