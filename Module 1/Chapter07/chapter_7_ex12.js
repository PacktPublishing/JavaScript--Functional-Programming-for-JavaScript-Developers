//Run this only on BabelJS REPL - https://babeljs.io/repl/
function priceFilter(s, ...v){
  //Bump up discount
  return s[0]+ (v[0] + 5);
}
let default_discount = 20;
let greeting = priceFilter `Your purchase has a discount of
${default_discount} percent`;
console.log(greeting); //Your purchase has a discount of 25