"use strict";
var a = 1;
{
let a = 2;
  console.log( a ); // 2
}
console.log( a ); // 1