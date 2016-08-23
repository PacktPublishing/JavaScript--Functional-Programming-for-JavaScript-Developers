//Run this example on JSBin REPL - http://jsbin.com/
//Global Scope
var a = 1;
function scopeTest() {
 a = 2; //Overwrites global variable 2, you omit 'var'
 console.log(a);
}
console.log(a); //prints 1
scopeTest();  //prints 2
console.log(a); //prints 2 (global value is overwritten)

//LocalScope
var scope_name = "Global";
function showScopeName () {
 // local variable; only accessible in this function
 var scope_name = "Local";
 console.log (scope_name); // Local
}
console.log (scope_name);     //prints - Global
showScopeName();             //prints – Local