"use strict";
// Karma configuration for running unit-tests in Docker
module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-jasmine-ajax',
            'karma-htmlfile-reporter'
        ],
        //logLevel: config.LOG_DEBUG,
        singleRun: false,
        colors: true,
        frameworks: ['jasmine-ajax', 'jasmine'],
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: '../report/unit-test-report.html',
            pageTitle: 'RHD frontend unit-test results'
        },
        failOnEmptyTestSuite: false,

        files: [
            // 'jasmine-global.js',
            'jquery.min.js',
            'angular.min.js',
            'foundation.min.js',
            'drupal-scaffold.js',
            'system.min.js', // 'https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/system.min.js',
            'custom-elements-es5-adapter.js', // 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.1/custom-elements-es5-adapter.js',
            'webcomponents-bundle.js', // 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.1/webcomponents-bundle.js',
            {pattern: '../../../../**/dist/**/*.js', included: true, served: true, watched: true},
            {pattern: '../**/*_spec.js', included: true, watched: true }
      ]
    })
};
