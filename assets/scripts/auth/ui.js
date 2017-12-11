'use strict'
const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully')
  $('sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Signed in succesfully')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#save-movie').show()
  $('#get-movie').show()
  // $('#delete-movie').show()
  $('#update-movie').show()
}
const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  $('#message').text('changePassword succesfully')
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('changePassword ')
}
const signOutSuccess = function (data) {
  console.log(data)
  $('#message').text('signOut succesfully')
  $('#sign-up').show()
  $('#sign-in').show()
  delete store.user
}
const signOutFailure = function (error) {
  $('#message').text('Error on Sign Out', error)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
