//Run this only on BabelJS REPL - https://babeljs.io/repl/
let m = new Map();
let s = { 'seq' : 101 };
m.set('1','Albert');
m.set('MAX', 99);
m.set(s,'Einstein');
console.log(m.has('1')); //true
console.log(m.get(s)); //Einstein
console.log(m.size); //3
m.delete(s);
m.clear();


let m2 = new Map([
   [ 1, 'Albert' ],
   [ 2, 'Douglas' ],
   [ 3, 'Clive' ],
]);
for (let a of m2.entries()){
 console.log(a);
}
//[1,"Albert"] [2,"Douglas"][3,"Clive"]
for (let a of m2.keys()){
 console.log(a);
} //1 2 3
for (let a of m2.values()){
console.log(a);
}
//Albert Douglas Clive