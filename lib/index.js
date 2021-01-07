/**
 * @fileoverview Nomad lint rules
 * @author NomadDev
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
module.exports.configs = {
  default: {
    extends: 'airbnb-base',
    plugins: ['nomadlint'],
    rules: {
      'nomadlint/nomad-log-error': ['error'],
    }
  }
}


