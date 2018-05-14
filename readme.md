## Unquirer

A wrapper for [Inquirer](https://www.npmjs.com/package/inquirer) to allow pre-answering questions with command line arguments

### Installation

This library has a peer dependency of inquirer, so make sure you also install it.

```bash
  npm install --save unquirer inquirer
```

### Usage

Given the following highly opinionated version of the inquirer 'input' example, to demonstrate `filter` and `validate` support:

```javascript
  const unquirer = require('unquirer')

  var questions = [
    {
      type: 'input',
      name: 'firstName',
      message: "What's your first name"
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What's your last name',
      filter: answer => {
        return 'Smith'
      }
    },
    {
      type: 'input',
      name: 'favColor',
      message: 'What's your favorite color',
      validate: answer => {
        if (answer === 'yellow') { return true }
        return "You can only like yellow!"
      }
    }
  ]

  async function go () {
    const answers = await unquirer.prompt(questions)
    console.log(JSON.stringify(answers, null, '  '))
  }

  go()
```

You could call this program in the regular way, to be prompted for all the questions:

```bash
  node input.js
```

Or, you could pass some of the answers in, and only be prompted about favColor:

```bash
  node input.js --firstName="Jim" --lastName="Smith"
```

Or you can pass in all the answers, totally non-interactive:

```bash
  node input.js --firstName="Jim" --lastName="Smith" --favColor="yellow"
```

### Roadmap

Auto parse this-case to thisCase
Test no answers
Document validation