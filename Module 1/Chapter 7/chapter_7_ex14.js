//Run this only on BabelJS REPL - https://babeljs.io/repl/
let x = {'first': 'Albert'};
   let s = new Set([1,2,'Sunday',x]);
   //console.log(s.has(x));  //true
   s.add(300);
   //console.log(s);  //[1,2,"Sunday",{"first":"Albert"},300]
   for (let a of s.entries()){
     console.log(a);
   }
   //[1,1]
   //[2,2]
   //["Sunday","Sunday"]
   //[{"first":"Albert"},{"first":"Albert"}]
   //[300,300]
   for (let a of s.keys()){
   console.log(a);
}
//1
//2
//Sunday
//{"first":"Albert"}
//300
for (let a of s.values()){
  console.log(a);
}
//1
//2
//Sunday
//{"first":"Albert"}
//300