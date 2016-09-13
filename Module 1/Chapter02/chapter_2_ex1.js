//Run this example on JSBin REPL - http://jsbin.com/

//Function Declarations
function add(a,b){
 return a+b;
}
c = add(1,2);
console.log(c);  //prints 3

//function expressions
var add = function(a,b){
 return a+b;
}
c = add(1,2);
console.log(c);  //prints 3

var facto = function factorial(n) {
 if (n <= 1)
   return 1;
 return n * factorial(n - 1);
};
console.log(facto(3));  //prints 6

//Self invoking function expressions
(function sayHello() {
  console.log("hello!");
})();

//Function passed as parameter to another function
function changeCase(val) {
 return val.toUpperCase();
}
function demofunc(a, passfunction) {
 console.log(passfunction(a));
}
demofunc("smallcase", changeCase);