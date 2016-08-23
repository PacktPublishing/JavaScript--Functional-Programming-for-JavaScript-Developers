//Run this only on BabelJS REPL - https://babeljs.io/repl/
function print(a, b){
 console.log(a,b);
}
print(...[1,2]);  //1 [2]

var a = [1,2];
var b = [ 0, ...a, 3 ];
console.log( b ); //[0,1,2,3]   

function print (a,...b){
 console.log(a,b);
}
console.log(print(1,2,3,4,5,6,7));  //1 [2,3,4,5,6,7]