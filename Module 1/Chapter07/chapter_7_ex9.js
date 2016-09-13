//Run this only on BabelJS REPL - https://babeljs.io/repl/
function SuperLogger(level, clazz, msg){
     console.log(`${level} : Exception happened in class: ${clazz} - Exception : ${msg}`);
}
SuperLogger("Log","Logger","Unknown Exception");