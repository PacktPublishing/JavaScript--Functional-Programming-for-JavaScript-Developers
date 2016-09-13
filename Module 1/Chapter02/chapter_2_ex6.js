var outer = 'Outer'; //Variable declared in global scope
 var copy;
 function outerFn(){  //Function declared in global scope
   var inner = 'Inner'; //Variable has function scope only, can not be
   //accessed from outside
   function innerFn(){     //Inner function within Outer function,
     //both global context and outer
     //context are available hence can access
     //'outer' and 'inner'
     console.log(outer);
     console.log(inner);
   }
   copy=innerFn;          //Store reference to inner function,
   //because 'copy' itself is declared
   //in global context, it will be available
   //outside also
 }
 outerFn();
 copy();  //Cant invoke innerFn() directly but can invoke via a variable declared in global scope
