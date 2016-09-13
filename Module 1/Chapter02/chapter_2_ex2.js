//Run this example on JSBin REPL - http://jsbin.com/
var validateDataForAge = function(data) {
 person = data();
 console.log(person);
 if (person.age <1 || person.age > 99){
   return true;
 }else{
   return false;
 }
};
var errorHandlerForAge = function(error) {
 console.log("Error while processing age");
};
function parseRequest(data,validateData,errorHandler) {
 var error = validateData(data);
 if (!error) {
   console.log("no errors");
 } else {
   errorHandler();
 }
}
var generateDataForScientist = function() {
 return {
   name: "Albert Einstein",
   age : Math.floor(Math.random() * (100 - 1)) + 1,
 };
};
var generateDataForComposer = function() {
     return {
       name: "J S Bach",
       age : Math.floor(Math.random() * (100 - 1)) + 1,
     };
};
//parse request
parseRequest(generateDataForScientist, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge, errorHandlerForAge);