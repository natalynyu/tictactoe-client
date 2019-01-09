'use strict'

const store = require('../store')

// Create game success/fail UI
const onCreateGameSuccess = (responseData) => {
  store.game = responseData.game
  $('.container').show()
  $('#gameInfo').show()
  $('#createGame').hide()
  $('#signin-message').hide()
  $('#password-message').hide()
  $('.cell').html('')
  $('#showAllGames-message').fadeOut(2500)
  $('#playerIndicator').text('Player 1, it\'s your turn!')
}
const onCreateGameFail = () => {
  $('#createGame-message').text('There was an error with starting the game. Please try again.')
}
// Show all games success/fail UI
const onShowAllGamesSuccess = (responseData) => {
  $('#allGames-message').text('Successfully showed all games below.')
  store.games = responseData.games
  $('#showAllGames-message').text('Games played: ' + store.games.length)
  $('#showAllGames-message').show().fadeOut(6000)
}
const onShowAllGamesFail = () => {
  $('#showAllGames-message').text('There was an error with showing all games. Please try again.')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFail,
  onShowAllGamesSuccess,
  onShowAllGamesFail
}
