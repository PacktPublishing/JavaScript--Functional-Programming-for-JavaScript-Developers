function delay(message) {
     setTimeout( function timerFn(){
       console.log( message );
     }, 1000 );
   }
 delay( "Hello World" );