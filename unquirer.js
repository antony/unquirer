'use strict'

const inquirer = require('inquirer')
const { partition } = require('./partition')
const { validate } = require('./validator')

exports.unquire = async function (questions, input) {
  const answered = Object.keys(input)
  const { truthy, falsy } = partition(questions, question => answered.includes(question.name))
  const interactiveAnswers = await inquirer.prompt(falsy)
  const providedAnswers = await validate(input, truthy)
  return Object.assign({}, providedAnswers, interactiveAnswers)
}
