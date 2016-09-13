//Run this only on BabelJS REPL - https://babeljs.io/repl/
function emmy(key, ...values){
	console.log(key);
	console.log(values);
}
let category="Best Movie";
let movie="Adventures in ES6";
emmy`And the award for ${category} goes to ${movie}`;
//["And the award for "," goes to ",""]
//["Best Movie","Adventures in ES6"]