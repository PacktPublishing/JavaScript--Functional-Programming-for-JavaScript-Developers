//Run this only on BabelJS REPL - https://babeljs.io/repl/
var a = [1,2];
var i = a[Symbol.iterator]();
console.log(i.next());
console.log(i.next());
console.log(i.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: undefined, done: true }

var list = ['Sunday','Monday','Tuesday'];
for (let i in list){
 console.log(i);  //0 1 2
}
for (let i of list){
 console.log(i);  //Sunday Monday Tuesday
}