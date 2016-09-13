//Loops and closures
for (var i=1; i<=5; i++) {
     setTimeout( function delay(){
       console.log( i );
     }, i*100);
}

//Correct way
 for (var i=1; i<=5; i++) {
     (function(j){
       setTimeout( function delay(){
         console.log( j );
     }, j*100);
  })( i );
}