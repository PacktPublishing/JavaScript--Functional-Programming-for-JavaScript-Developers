//Modules
var superModule = (function (){
 var secret = 'supersecretkey';
 var passcode = 'nuke';
 function getSecret() {
   console.log( secret );
}
 function getPassCode() {
   console.log( passcode );
}
return {
   getSecret: getSecret,
   getPassCode: getPassCode
}; })();

superModule.getSecret();
superModule.getPassCode();