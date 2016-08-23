var arr = [10];
var arr = Array(10); // Creates an array with no element, but with arr.length set to 10
// The above code is equivalent to
var arr = [];
arr.length = 10;

var days = [];
days[0] = "Sunday";
days[1] = "Monday";

var arr_generic = new Array("A String", myCustomValue, 3.14);
var fruits = ["Mango", "Apple", "Orange"];

var arr = ['string', 42.0, true, false, null, undefined,['sub', 'array'], {object: true}, NaN];

var days = ["Sunday", "Monday", "Tuesday"];

var colors = [];
colors[30] = ['Green'];
console.log(colors.length); // 31

var colors = ['Red', 'Blue', 'Yellow'];
console.log(colors.length); // 3
colors.length = 2;
console.log(colors); // ["Red","Blue"] - Yellow has been removed
colors.length = 0;
console.log(colors); // [] the colors array is empty
colors.length = 3;
console.log(colors); // [undefined, undefined, undefined]

var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
 console.log(color);
});

var myArray = new Array("33", "44", "55");
myArray = myArray.concat("3", "2", "1");
console.log(myArray);
// ["33", "44", "55", "3", "2", "1"]

var myArray = new Array('Red','Blue','Yellow');
var list = myArray.join(" ~ ");
console.log(list);
//"Red - Blue - Yellow"

var myArray = new Array("1", "2", "3");
var last = myArray.pop();
// myArray = ["1", "2"], last = "3"

var myArray = new Array("1", "2");
myArray.push("3");
// myArray = ["1", "2", "3"]

var myArray = new Array ("1", "2", "3");
var first = myArray.shift();
// myArray = ["2", "3"], first = "1"

var myArray = new Array ("1", "2", "3");
myArray.unshift("4", "5");
// myArray = ["4", "5", "1", "2", "3"]

var myArray = new Array ("1", "2", "3");
myArray.reverse();
// transposes the array so that myArray = [ "3", "2", "1" ]

var myArray = new Array("A", "C", "B");
myArray.sort();
// sorts the array so that myArray = [ "A","B","c" ]