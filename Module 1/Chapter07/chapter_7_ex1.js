//Block scoping for IIFE
var a = 1;
(function blockscope(){
var a = 2;
   console.log(a);   // 2
})();
console.log(a);       // 1	