/**
 * @fileoverview eslint plugin for serpent
 * @author Mora
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + '/rules'),
  configs: {
    recommended: {
      plugins: ['serpent'],
      rules: {
        'serpent/no-path-sep': 'error'
      }
    }
  }
}
