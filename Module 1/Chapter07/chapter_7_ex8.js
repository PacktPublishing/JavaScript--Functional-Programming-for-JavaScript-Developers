//Run this only on BabelJS REPL - https://babeljs.io/repl/
//Object Destructuring
function f() {
     return {
       a: 'a',
       b: 'b',
       c: 'c'
	}; 
}
var { a: a, b: b, c: c } = f();
console.log(a,b,c); //a b c
//this is target: source - which is incorrect
var { x: a, x: b, x: c } = f();
console.log(x,y,z); //x is undefined, y is undefined z is undefined
//this is source: target - correct
var { a: x, b: y, c: z } = f();
console.log(x,y,z); // a b c