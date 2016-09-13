// Single global object
   var SERVER = SERVER||{};
   SERVER.basicServerConfig = (function () {
     var environment= "production";
     startupParams= {
     cacheTimeout: 30,
      locale: "en_US"
  };
  return {
    init: function () {
      console.log( "Initializing the server" );
    },
    updateStartup: function( params ) {
      this.startupParams = params;
      console.log( this.startupParams.cacheTimeout );
      console.log( this.startupParams.locale );
    } 
   };
})();
SERVER.basicServerConfig.init(); //"Initializing the server"
SERVER.basicServerConfig.updateStartup({cacheTimeout:60,locale:"en_UK"}); //60, en_UK