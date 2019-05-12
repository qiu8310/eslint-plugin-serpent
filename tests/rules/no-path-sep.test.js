const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6
  }
})

const rule = require('../../lib/rules/no-path-sep')
const message = 'should not contains "/" or "\\".'

ruleTester.run('no-path-sep', rule, {
  valid: [
    'path.join(__dirname, "abc", "def")',
    'path.resolve(__dirname)',
    {code: 'path.join(__dirname, "ab/c")', options: [['path.other']]},
  ],
  invalid: [
    {
      code: 'path.join("a/b", "c")',
      errors: [{message}]
    },
    {
      code: 'path.join("a/b", "c/d")',
      errors: [{message}, {message}]
    },
    {
      code: 'path.resolve("a/b")',
      errors: [{message}]
    },
    {
      code: 'path.others("a/b")',
      options: [['path.others']],
      errors: [{message}]
    }
  ]
})
