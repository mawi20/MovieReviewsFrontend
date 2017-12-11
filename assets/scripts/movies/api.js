const store = require('../store')
const config = require('../config')

const saveMovie = function (info) {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: { note: info }
  })
}

const updateMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.note.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.note.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  saveMovie,
  updateMovie,
  getMovie,
  deleteMovie
}
