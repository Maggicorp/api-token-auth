'use strict'

const config = require('../config.js')

const signUp = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
// an object that we are passing to the ajax method
module.exports = {
  signUp
}
