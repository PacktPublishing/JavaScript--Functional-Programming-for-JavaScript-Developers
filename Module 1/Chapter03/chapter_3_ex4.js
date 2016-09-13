var str = /behaviou?r/;
console.log(str.test("behaviour"));
// true
console.log(str.test("behavior"));
// true

console.log(/'\d+'/.test("'123'")); // true

var heartyLaugh = /Ha+(Ha+)+/i;
console.log(heartyLaugh.test("HaHaHaHaHaHaHaaaaaaaaaaa"));
//true

console.log(/cat/.test('a black cat')); //true

console.log(/\bcat/.test('a black cat')); //true

console.log(/\bcat/.test('tomcat')); //false

console.log(/cat\b/.test('tomcat')); //true

console.log(/\bcat\b/.test('a black cat')); //true

console.log(/\bcat\b/.test("concatenate")); //false
var match = /\d+/.exec("There are 100 ways to do this");
console.log(match);
// ["100"]
console.log(match.index);
// 10