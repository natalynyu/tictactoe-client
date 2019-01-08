'use strict'

const store = require('../store')

// Sign Up UI
const onSignUpSuccess = responseData => {
  console.log('responseData is ', responseData)
  $('#signup-message').text('Successfully created an account!')
}
const onSignUpFail = () => {
  $('#signup-message').text('There was an error with signing up. Please try again.')
}
// Sign In UI
const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log('Store contains: ', store)
  $('#createGame').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#changePassHeading').show()
  $('#signInHeading').hide()
  $('#signUpHeading').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#signup-message').hide()
  $('#signout-message').hide()
  $('#signin-message').text('You have successfully signed in.')
}
const onSignInFail = () => {
  $('#signin-message').text('There was an error with signing in. Please try again.')
}
// Password Update UI
const onChangePasswordSuccess = () => {
  console.log('Store contains: ', store)
  $('#password-message').text('Password was updated successfully.')
}
const onChangePasswordFail = () => {
  $('#password-message').text('There was an error with changing your password. Please try again.')
}
// Sign Out UI
const onSignOutSuccess = () => {
  store.user = null
  console.log('Store contains: ', store)
  $('#signout-message').text('You have signed out successfully.')
  $('#createGame').hide()
  $('#changePassHeading').hide()
  $('#change-password').hide()
  $('.container').hide()
  $('#gameInfo').hide()
  $('#sign-out').hide()
  $('#signInHeading').show()
  $('#signUpHeading').show()
  $('#sign-in').show()
  $('#sign-up').show()
}
const onSignOutFail = () => {
  $('#signout-message').text('There was an error with signing out. Please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onChangePasswordSuccess,
  onChangePasswordFail,
  onSignOutSuccess,
  onSignOutFail
}
