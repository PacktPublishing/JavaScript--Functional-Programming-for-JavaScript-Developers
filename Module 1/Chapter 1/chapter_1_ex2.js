var a;      //declares a variable but its undefined
var b = 0;
console.log(b);    //0
console.log(a);    //undefined
console.log(a+b); //NaN
const area_code = '515';
var aNumber = 555;
var aFloat = 555.0;

var underterminedValue = "elephant";
if (isNaN(parseInt(underterminedValue,2)))
{
  console.log("handle not a number case");
}
else {
  console.log("handle number case");
}