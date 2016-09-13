function Player() {
 this.isAvailable = function() {
   return "Instance method says - he is hired";
 };
}
Player.prototype.isAvailable = function() {
 return "Prototype method says - he is Not hired";
};
var crazyBob = new Player();
console.log(crazyBob.isAvailable());