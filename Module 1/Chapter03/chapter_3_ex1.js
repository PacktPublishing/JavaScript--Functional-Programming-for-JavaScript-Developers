var pattern = /orange/;
console.log(pattern.test("orange")); // true
var patternIgnoreCase = /orange/i;
console.log(patternIgnoreCase.test("Orange")); // true
var patternGlobal = /orange/ig;
console.log(patternGlobal.test("Orange Juice")); // true	