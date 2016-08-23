var a = ['a', 'b', 'a', 'b', 'a','c','a'];
console.log(a.indexOf('b')); // 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // 3
console.log(a.indexOf('1')); // -1, 'q' is not found

var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); //  5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); //  1
console.log(a.lastIndexOf('z')); //  -1

