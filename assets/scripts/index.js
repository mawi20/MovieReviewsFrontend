'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
// import * as Cookies from 'js-cookie'
$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
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
