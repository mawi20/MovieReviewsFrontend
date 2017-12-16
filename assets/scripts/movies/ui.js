'use strict'

const showMovies = require('../templates/show-movies.handlebars')

const saveMovieSuccess = function (data) {
  $('#message').text('movie created succesfully!')
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
const createMovieSuccess = (data) => {
  const onCreateMovie = createMovie({ movies: data.movies })
  $('#message').text('Movies created succesfully!')
}
const createMovieFailure = function (data) {
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
const updateMoviePopulate = function (data) {
  console.log(data)
  $('#update-movie').show()
  $('#update-by-movie-title').val(data.movie.title)
  $('#update-by-movie-description').val(data.movie.description)
  $('#update-by-movie-length').val(data.movie.length)
  $('#update-by-movie-rating').val(data.movie.rating)
  $('#update-by-movie-id').val(data.movie.id)
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
  updateMovieFailure,
  createMovieSuccess,
  createMovieFailure,
  updateMoviePopulate
}
