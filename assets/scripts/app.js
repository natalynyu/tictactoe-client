'use strict'

const authorizationEvents = require('./authorization/events')
const gameEvents = require('./game/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authorizationEvents.addAuthorizationHandlers()
  gameEvents.addGameHandlers()
  $('#createGame').hide()
  $('.container').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#changePassHeading').hide()
  $('#showAllGames').hide()
  // prevent extra empty space from showing on page load
  $('#signin-message').hide()
  $('#password-message').hide()
  $('#signout-message').hide()
})
