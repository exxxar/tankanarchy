/**
 * This file contains compilation and build rules for the project. This file
 * is imported by the gulpfile during compilation and build.
 * For build system: 1.2.2
 */

module.exports = {
  GULPFILE_VERSION: "1.2.2",
  JS_LINT_RULES: [
    {
      name: 'server side javascript',
      sourceFiles: [
        './lib/**/*.js',
        './server.js'
      ]
    },
    {
      name: 'client side game javascript',
      sourceFiles: [
        './public/js/**/*.js'
      ]
    },
    {
      name: 'shared javascript files',
      sourceFiles: [
        './shared/*.js'
      ]
    }
  ],
  JS_BUILD_RULES: [
    {
      name: 'client side game javascript',
      externs: [
        './node_modules/google-closure-compiler/contrib/externs/jquery-1.9.js',
        './extern/extern.js'
      ],
      compilationLevel: 'ADVANCED_OPTIMIZATIONS',
      sourceFiles: [
        './public/js/game/*.js',
        './shared/*.js',
        './public/js/client.js'
      ],
      outputDirectory: './public/dist',
      outputFile: 'minified.js'
    }
  ],
  LESS_BUILD_RULES: [
    {
      name: 'default stylesheet',
      sourceFiles: [
        './public/less/styles.less'
      ],
      outputDirectory: './public/dist',
      outputFile: 'minified.css'
    }
  ]
};
