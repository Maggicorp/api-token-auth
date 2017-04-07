'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('You did it!')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  console.log(response)
  console.log('You did it!')
  store.user = response.user
}

const signInFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess
}
