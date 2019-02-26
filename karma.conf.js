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
        singleRun: true,
        colors: true,
        frameworks: ['jasmine-ajax', 'jasmine'],
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: 'src/tests/unit/report/unit-test-report.html',
            pageTitle: 'RHD frontend unit-test results'
        },
        failOnEmptyTestSuite: false,
        captureTimeout: 210000,
        browserDisconnectTolerance: 3,
        browserDisconnectTimeout : 210000,
        browserNoActivityTimeout : 210000,
        files: [
            // 'jasmine-global.js',
            'src/tests/unit/config/jquery.min.js',
            'src/tests/unit/config/angular.min.js',
            'src/tests/unit/config/foundation.min.js',
            'src/tests/unit/config/drupal-scaffold.js',
            'src/tests/unit/config/system.min.js', // 'https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/system.min.js',
            'src/tests/unit/config/custom-elements-es5-adapter.js', // 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.1/custom-elements-es5-adapter.js',
            'src/tests/unit/config/webcomponents-bundle.js', // 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.1/webcomponents-bundle.js',
            {pattern: 'src/docs/static/js/**/*.js', included: false, watched: true},
            {pattern: 'src/tests/unit/**/*search*_spec.js', included: true, watched: true}
        ]
    })
};
