var _ = require('underscore');
   //Shared functionality encapsulated into a CustomLogger
   var logger = (function () {
     var CustomLogger = {
       log: function (message) {
         console.log(message);
       }
     };
     return CustomLogger;
   }());
   //An object that will need the custom logger to log system specific logs
   var Server = (function (Logger) {
     var CustomServer = function () {
       this.init = function () {
         this.log("Initializing Server...");
     };
    };
     // This copies/extends the members of the 'CustomLogger' into 'CustomServer'
     _.extend(CustomServer.prototype, Logger);
     return CustomServer;
   }(logger));
   (new Server()).init(); //Initializing Server...
