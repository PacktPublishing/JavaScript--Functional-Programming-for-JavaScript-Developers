//Run this only on BabelJS REPL - https://babeljs.io/repl/
var [start, end] = [0,5];
for (let i=start; i<end; i++){
 console.log(i);
}
//prints - 0,1,2,3,4

function fn() {
 return [1,2,3];
}
var [a,b,c]=fn();
console.log(a,b,c); //1 2 3
//We can skip one of them
var [d,,f]=fn();
console.log(d,f);   //1 3
//Rest of the values are not used
var [e,] = fn();
console.log(e); //1
