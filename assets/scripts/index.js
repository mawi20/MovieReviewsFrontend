'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
// import * as Cookies from 'js-cookie'
const store = require('./store')

const fetchMovies = function () {
  // console.log(token)
  const url = config.apiOrigin + '/movies'
  console.log(url)
  $.ajax({
    type: 'GET',
    url: url,
    headers: {'Authorization': 'Token ' + store.user.token}, // WTF? documentation unclear
    dataType: 'JSON',
    success: function (data) {
      console.log(data)
      $('#MovieList').text('')
      $.each(data['movies'], function (index, movie) {
        console.log(movie['title'])
        $('#MovieList').append('<h1>' + movie['title'] + '</h1><h3>' + movie['description'] + '</h3><h3>' + movie['length'] + '</h3><h3>' + movie['rating'].toString() + '</h3>')
        // console.log(movie)
      })
    }
  })
}

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  $('#MovieLinkDiv').hide()
  $('#MovieLink').click(function () {
    fetchMovies()
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// $('#sign-up').submit(function (e) {
//   const signUpEmail = $('#sign-up-email').val()
//   const signUpPassword = $('#sign-up-password').val()
//   const signUpPasswordConfirmation = $('#sign-up-password-confirmation').val()
//   const data = {'credentials': {'email': signUpEmail, 'password': signUpPassword, 'password_confirmation': signUpPasswordConfirmation}}
//   const url = 'https://mawimovie.herokuapp.com/sign-up'
//   $.ajax({
//     type: 'POST',
//     url: url,
//     data: data,
//     dataType: 'JSON',
//     success: function (data) {
//       Cookies.set('userdata', {'id': data.user.id, 'email': data.user.email})
//       $('#game').show()
//       // console.log(data)
//     }
//   })
//   e.preventDefault()
// })
