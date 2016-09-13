var a = 1;
//Lets introduce a function -scope
//1. Add a named function foo() into the global scope
function foo() {
var a = 2;
 console.log( a ); // 2
}
//2. Now call the named function foo() foo();
console.log( a ); // 1

//Same thing with a better approach 
var x = 1;
//Lets introduce a function -scope
//1. Add a named function foo() into the global scope
(function foo() {
var x = 2;
	console.log( x ); // 2
})(); 
//<---this function executes immediately console.log( x ); // 1

//IIFE with params
(function foo(b) {
    var a = 2;
    console.log( a + b );
})(3); //prints 5

//Inline function expressions
function setActiveTab(activeTabHandler, tab){
     //set active tab
     //call handler
     activeTabHandler();
}
setActiveTab( function (){
console.log( "Setting active tab" ); }, 1 );
   //prints "Setting active tab"