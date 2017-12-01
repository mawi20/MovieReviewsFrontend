'use strict'
const store = require('../store.js')
const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('#message').text('Signed in succesfully')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}
const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}
const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up succesfully')
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('changePassword ')
}
const changePasswordSuccess = function (data) {
  console.log(data)
  $('#message').text('changePassword succesfully')
}
const signOutSuccess = function (data) {
  console.log(data)
  $('#message').text('signOut succesfully')
  delete store.user
}
module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess
}
