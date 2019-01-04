'use strict'

const store = require('../store')

// Sign Up UI
const onSignUpSuccess = responseData => {
  console.log('responseData is ' + responseData)
  $('#signup-message').text('Successfully created an account!')
}
const onSignUpFail = () => {
  $('#signup-message').text('There was an error with signing up. Please try again.')
}
// Sign In UI
const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  console.log('Store contains: ' + store)
  $('#signin-message').text('You have successfully signed in.')
}
const onSignInFail = () => {
  $('#signin-message').text('There was an error with signing in. Please try again.')
}
// Password Update UI
const onChangePasswordSuccess = () => {
  $('#password-message').text('Password was updated successfully.')
}
const onChangePasswordFail = () => {
  $('#password-message').text('There was an error with changing your password. Please try again.')
}
// Sign Out UI
const onSignOutSuccess = () => {
  store.user = null
  $('signout-message').text('You have signed out successfully.')
}
const onSignOutFail = () => {
  $('signout-message').text('There was an error with signing out. Please try again.')
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
