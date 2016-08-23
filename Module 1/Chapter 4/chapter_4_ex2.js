//Prototype
//A function that returns nothing and creates nothing
function Player() {}

//Add a function to the prototype property of the function
Player.prototype.usesBat = function() {
 return true;
}
//We call player() as a function and prove that nothing happens
var crazyBob = Player();
if(crazyBob === undefined){
 console.log("CrazyBob is not defined");
}
//Now we call player() as a constructor along with 'new'
//1. The instance is created
//2. method usesBat() is derived from the prototype of the function
var swingJay = new Player();
if(swingJay && swingJay.usesBat && swingJay.usesBat()){
 console.log("SwingJay exists and can use bat");
}