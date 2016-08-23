var modulePattern = function(){
 var privateOne = 1;
 function privateFn(){
   console.log('privateFn called');
 }
 return {
   publicTwo: 2,
   publicFn:function(){
     modulePattern.publicFnTwo();
   },
   publicFnTwo:function(){
     privateFn();
   } 
  }
}();
modulePattern.publicFn(); "privateFn called"