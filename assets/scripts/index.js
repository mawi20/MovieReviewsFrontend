'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const movies = require('./movies/events.js')
// import * as Cookies from 'js-cookie'
const login = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  login.addHandlers()
  movies.addHandlers()
})
// const loginForms = function () {
//   $('#change-password').show()
//   $('#sign-out').show()
//   $('save-movie').show()

//   const url = config.apiOrigin + '/movies'
//   console.log(url)
//   $.ajax({
//     type: 'GET',
//     url: url,
//     headers: {'Authorization': 'Token ' + store.user.token}, // WTF? documentation unclear
//     dataType: 'JSON',
//     success: function (data) {
//       console.log(data)
//       $('#MovieList').text('')
//       $.each(data['movies'], function (index, movie) {
//         console.log(movie['title'])
//         $('#MovieList').append('<h1>' + movie['title'] + '</h1><h3>' + movie['description'] + '</h3><h3>' + movie['length'] + '</h3><h3>' + movie['rating'].toString() + '</h3>')
//         // console.log(movie)
//       })
//     }
//   })
// }

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
