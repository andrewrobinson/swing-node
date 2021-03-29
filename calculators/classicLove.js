// var winston = require('winston');

// winston.add(winston.transports.File, { 
//   filename: './logs/processor.log', 
//   level: 'info',
//   json: false,
//   timestamp: function() { return (new Date()).toISOString(); } 
// });

// winston.handleExceptions(new winston.transports.File({ filename: './logs/uncaught_processor.log' }));

// winston.prepareForAutomatedDeveloperTesting = function() {
//   winston.remove(winston.transports.Console);
//   winston.remove(winston.transports.File);
//   winston.add(winston.transports.File, { filename: './logs/test.log' });
// };


var fakeLogger = {

    info: function(val) {
      console.log((new Date()).toISOString()+" - INFO: "+val);
    },
  
    warn: function(val) {
      console.log((new Date()).toISOString()+" - WARN: "+val);
    },
  
    error: function(val) {
      console.log((new Date()).toISOString()+" - ERROR: "+val);
    },
  
    prepareForAutomatedDeveloperTesting: function() {
  
    }
  
  }
  
  
  // module.exports = winston;
  module.exports = fakeLogger;
  
  
  // Winston log levels are: fatal, error, warning, info, debug, trace
  