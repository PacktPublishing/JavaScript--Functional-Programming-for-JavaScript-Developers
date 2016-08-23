function Player(name,sport,age,country){
     this.constructor.noOfPlayers++;
     // Private Properties and Functions
     // Can only be viewed, edited or invoked by privileged members
     var retirementAge = 40;
     var available=true;
     var playerAge = age?age:18;
     
     function isAvailable(){ 
          return available && (playerAge<retirementAge); 
     }

     var playerName=name ? name :"Unknown";
     var playerSport = sport ? sport : "Unknown";
     // Privileged Methods
     // Can be invoked from outside and can access private members
     // Can be replaced with public counterparts
     this.book=function(){
       if (!isAvailable()){
         this.available=false;
       } else {
         console.log("Player is unavailable");
       } 
     };

     this.getSport=function(){ return playerSport; };

     // Public properties, modifiable from anywhere
     this.batPreference="Lefty";
     this.hasCelebGirlfriend=false;
     this.endorses="Super Brand";
}
// Public methods - can be read or written by anyone
// Can only access public and prototype properties
Player.prototype.switchHands = function(){ this. batPreference="righty"; };
Player.prototype.dateCeleb = function(){ this.hasCelebGirlfriend=true; };
Player.prototype.fixEyes = function(){ this.wearGlasses=false; };
// Prototype Properties - can be read or written by anyone (or overridden)
Player.prototype.wearsGlasses=true;
// Static Properties - anyone can read or write
Player.noOfPlayers = 0;

(function PlayerTest(){
     //New instance of the Player object created.
     var cricketer=new Player("Vivian","Cricket",23,"England");
     var golfer =new Player("Pete","Golf",32,"USA");
     console.log("So far there are " + Player.noOfPlayers + " in the guild");
     //Both these functions share the common 'Player.prototype. wearsGlasses' variable
     cricketer.fixEyes();
     golfer.fixEyes();
     cricketer.endorses="Other Brand";//public variable can be updated
     //Both Player's public method is now changed via their prototype
     Player.prototype.fixEyes=function(){
       this.wearGlasses=true;
     };
     //Only Cricketer's function is changed
     cricketer.switchHands=function(){
       this.batPreference="undecided";
     };
})();