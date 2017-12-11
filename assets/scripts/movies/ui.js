'use strict'

const showMovies = require('../templates/show-movies.handlebars')

const saveMovieSuccess = function (data) {
  $('#message').text('Champion movie created succesfully!')
}

const saveMovieFailure = function (error) {
  $('#message').text('Error Saving Movie', error)
}

const getMovieSuccess = (data) => {
  const onShowMovies = showMovies({ movies: data.movies })
  $('.display-movies').empty()
  $('.display-movies').append(onShowMovies)
  $('#message').text('Movies retrieved succesfully!')
}

const getMovieFailure = function (data) {
  $('#message').text('Failed to get movies')
}

const deleteMovieSuccess = function (data) {
  $('#message').text('Movie deleted successfully!')
}

const deleteMovieFailure = function (data) {
  $('#message').text('Unable to delete movie')
}

const updateMovieSuccess = function (data) {
  $('#message').text('Movie succesfully updated!')
}

const updateMovieFailure = function (data) {
  $('#message').text('Unable to update movie')
}

module.exports = {
  saveMovieSuccess,
  saveMovieFailure,
  getMovieSuccess,
  getMovieFailure,
  showMovies,
  deleteMovieSuccess,
  deleteMovieFailure,
  updateMovieSuccess,
  updateMovieFailure
}
