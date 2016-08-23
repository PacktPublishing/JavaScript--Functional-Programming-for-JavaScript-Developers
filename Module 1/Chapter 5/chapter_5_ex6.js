var revealingExample = function(){
 var privateOne = 1;
 function privateFn(){
   console.log('privateFn called');
 }
 var publicTwo = 2;
 function publicFn(){
   publicFnTwo();
 }
 function publicFnTwo(){
   privateFn();
 }
 function getCurrentState(){
return 2; }
 // reveal private variables by assigning public pointers
 return {
   setup:publicFn,
   count:publicTwo,
   increaseCount:publicFnTwo,
   current:getCurrentState()
}; }();
console.log(revealingExample.current); // 2
revealingExample.setup(); //privateFn called