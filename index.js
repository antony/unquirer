'use strict'

const inquirer = require('inquirer')
const args = require('args-parser')
const { partition } = require('./partition')
const { validate } = require('./validator')

module.exports = function (questions) {
  const args = args(process.argv)
  const { truthy, falsy } = partition(questions, question => args.includes(question.name))
  const interactiveAnswers = await inquirer(falsy)
  const providedAnswers = await validate(args, truthy)
  return Object.assign({}, providedAnswers, interactiveAnswers)
}
