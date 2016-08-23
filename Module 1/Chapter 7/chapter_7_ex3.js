//Run this only on BabelJS REPL - https://babeljs.io/repl/
function fooey() {
     console.log(foo); // ReferenceError
     let foo = 5000;
}
for (let i = 0; i<5; i++) {
    console.log(i);
}
console.log(i); // i is not defined
