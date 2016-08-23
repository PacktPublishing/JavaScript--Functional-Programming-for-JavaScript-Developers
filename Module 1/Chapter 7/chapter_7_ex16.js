//Traditional Function
function multiply(a,b) {
	return a*b; 
}
//Arrow
var multiply = (a,b) => a*b;
console.log(multiply(1,2)); //2

// single argument, single statement
//arg => expression;
var f1 = x => console.log("Just X");
f1(); //Just X
// multiple arguments, single statement
//(arg1 [, arg2]) => expression;
var f2 = (x,y) => x*y;
console.log(f2(2,2)); //4
// single argument, multiple statements
// arg => {
//     statements;
// }
var f3 = x => {
 if(x>5){
   console.log(x);
 }
 else {
   console.log(x+5);
 } 
}
f3(6); //6
// multiple arguments, multiple statements
// ([arg] [, arg]) => {
//   statements
// }
var f4 = (x,y) => {
if(x!=0 && y!=0){
	return x*y; }
}
console.log(f4(2,2));//4
// with no arguments, single statement
//() => expression;
var f5 = () => 2*2;
console.log(f5()); //4
//IIFE
console.log(( x => x * 3 )( 3 )); // 9