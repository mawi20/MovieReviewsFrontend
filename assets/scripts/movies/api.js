const store = require('../store')
const config = require('../config')
const ui = require('./ui')

const saveMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateMovie = function (data) {
  const submitData = { 'movie': data }
  console.log(submitData)
  return $.ajax({
    url: config.apiOrigin + '/movies/' + submitData.movie.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: submitData
  })
}

const getMovies = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const getMovie = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      ui.updateMoviePopulate(data)
    }
  })
}
const deleteMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  saveMovie,
  updateMovie,
  getMovies,
  deleteMovie,
  getMovie
}
