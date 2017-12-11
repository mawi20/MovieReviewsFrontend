const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onSaveMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.saveMovie(data)
    .then(ui.saveMovieSuccess)
    .catch(ui.saveMovieFailure)
}

const onGetMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getMovie(data)
    .then(ui.getMovieSuccess)
    .catch(ui.getMovieFailure)
}

const onDeleteMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteMovie(data)
    .then(ui.deleteMovieSuccess)
    .catch(ui.deleteMovieFailure)
}

const onUpdateMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateMovie(data)
    .then(ui.updateMovieSuccess)
    .catch(ui.updateMovieFailure)
}

const clearMovieForm = function () {
  $('#save-movie').trigger('reset')
  $('#get-movie').trigger('reset')
  $('#delete-movie').trigger('reset')
  $('#update-movie').trigger('reset')
}

const hideMovieForm = function () {
  $('#update-movie').hide()
  $('#get-movie').hide()
  $('#delete-movie').hide()
  $('#save-movie').hide()
}

hideMovieForm()

const addHandlers = function (event) {
  $('#save-movie').on('submit', onSaveMovie)
  $('#save-movie').on('submit', clearMovieForm)
  $('#get-movie').on('submit', onGetMovie)
  $('#delete-movie').on('submit', onDeleteMovie)
  $('#delete-movie').on('submit', clearMovieForm)
  $('#update-movie').on('submit', onUpdateMovie)
  $('#update-movie').on('submit', clearMovieForm)
}

module.exports = {
  addHandlers,
  clearMovieForm,
  onUpdateMovie,
  onDeleteMovie,
  onGetMovie
}
