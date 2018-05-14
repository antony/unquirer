'use strict'

const args = require('args-parser')
const { unquire } = require('./unquirer')
const argv = args(process.argv)

exports.prompt = function (questions) {
  return unquire(questions, argv)
}