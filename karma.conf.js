// https://github.com/Nikku/karma-browserify
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'jasmine'],
    files: ['test/unit/**/*.js'],
    reporters: ['spec'],
    preprocessors: {
      'test/unit/**/*.js': ['browserify']
    },
    browserify: {
      noParse: [
        require.resolve('./static/js/pdfmake.js')
      ],
      debug: true,
      // needed to enable mocks
      plugin: [require('proxyquireify').plugin]
    },
    // if you want to continuously re-run tests on file-save,
    // replace the following line with `autoWatch: true`
    singleRun: true
  })
}
