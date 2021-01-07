/**
 * @fileoverview Indicates the correct use of the function for error logging
 * @author NomadDev
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Indicates the correct use of the function for error logging",
            category: "ImportDeclaration",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            ImportDeclaration(node) {
                if (node.source.value === 'react-native' &&
                    node.specifiers.find(obj => obj.imported.name === 'SentryHandler')) {
                        const msg = 'Utilize logError do módulo utils/errors no local de SentryHandler';
                        context.report(node, msg);
                    }
            },

        };
    }
};
