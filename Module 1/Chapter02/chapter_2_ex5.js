var sum = function () {
 var i, total = 0;
 for (i = 0; i < arguments.length; i += 1) {
   total += arguments[i];
 }
 return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9)); // prints 45
console.log(sum(1,2,3,4,5)); // prints 15