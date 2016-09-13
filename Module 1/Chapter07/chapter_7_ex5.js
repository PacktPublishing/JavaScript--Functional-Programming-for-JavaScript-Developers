//Run this only on BabelJS REPL - https://babeljs.io/repl/
function sum(a,b){
 a = a || 0;
 b = b || 0;
 return (a+b);
}
console.log(sum(9,9)); //18
console.log(sum(9));   //9

function sum(a=0, b=0){
 return (a+b);
}
console.log(sum(9,9)); //18
console.log(sum(9));   //9
