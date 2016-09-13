String.prototype.reverse = function() {
     return Array.prototype.reverse.apply(this.split('')).join('');
   };
var str = 'JavaScript';
console.log(str.reverse()); //"tpircSavaJ"