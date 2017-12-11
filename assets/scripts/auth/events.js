'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// $(event.target).attr('data-id')
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const hideLoggedInForms = function () {
  $('#change-password').hide()
  $('#sign-out').hide()
}
hideLoggedInForms()

const clearAuthForms = function () {
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  $('#signout').trigger('reset')
}
const hideMovieForms = function () {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#save-movie').hide()
  $('#get-movie').hide()
//   // $('#delete-note').hide()
  $('#update-movie').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  // $('#message').text('Signed out succesfully')
}
hideMovieForms()

const clearMovieForms = function () {
  $('#update-movie').trigger('reset')
  $('#get-movie').trigger('reset')
  $('#save-movie').trigger('reset')
  $('.display-movies').empty()
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-up').on('submit', clearAuthForms)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#sign-out').on('submit', hideMovieForms)
  $('#sign-out').on('submit', hideMovieForms)
  $('#sign-out').on('submit', clearAuthForms)
  $('#sign-out').on('submit', hideLoggedInForms)
  $('#sign-out').on('submit', clearMovieForms)
  $('#change-password').on('submit', onChangePassword)
  $('#change-password').on('submit', clearAuthForms)

  // $('#get-movies').on('submit', OnGetMovies)
  // $('#create-movies').on('submit', OnCreateMovies)
  // $('#update-movies').on('submit', OnUpdateMovies)
}

module.exports = {
  addHandlers,
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  clearAuthForms,
  getFormFields
  // OnCreateMovies,
  // OnUpdateMovies
}
