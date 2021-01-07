/**
 * @fileoverview Indicates the correct use of the function for error logging
 * @author NomadDev
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/nomad-log-error"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("nomad-log-error", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "import SentryHandler from '~/utils/sentryHandler';",
            errors: [{
                message: "Utilize logError do módulo utils/errors no local de SentryHandler",
                type: "ImportDeclaration"
            }]
        }
    ]
});
