module.exports = function (config) {

  config.set({
    frameworks: ['jasmine'],
    files: [
      'curtsy.js',
      /* Match all test files */
      'test/**/*.js'
    ],
    reporters : ['dots'],
    logLevel  : config.LOG_WARN,
    browsers  : ['Chrome'],
    singleRun : true
  });
};
