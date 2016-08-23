//Implement BasicServer that does the bare minimum
   function BasicServer() {
     this.pid = 1;
     console.log("Initializing basic Server");
     this.decorators_list = []; //Empty list of decorators
   }
   //List of all decorators
   BasicServer.decorators = {};
   //Add each decorator to the list of BasicServer's decorators
   //Each decorator in this list will be applied on the BasicServer
     instance
   BasicServer.decorators.reverseProxy = {
     init: function(pid) {
       console.log("Started Reverse Proxy");
       return pid + 1;
} };
   BasicServer.decorators.servePHP = {
     init: function(pid) {
       console.log("Started serving PHP");
       return pid + 1;
     }
   };
   BasicServer.decorators.serveNode = {
     init: function(pid) {
       console.log("Started serving Node");
       return pid + 1;
} };
//Push the decorator to this list everytime decorate() is called
   BasicServer.prototype.decorate = function(decorator) {
     this.decorators_list.push(decorator);
   };
   //init() method looks through all the applied decorators on
     BasicServer
   //and executes init() method on all of them
   BasicServer.prototype.init = function () {
     var running_processes = 0;
     var pid = this.pid;
     for (i = 0; i < this.decorators_list.length; i += 1) {
       decorator_name = this.decorators_list[i];
       running_processes =
         BasicServer.decorators[decorator_name].init(pid);
     }
     return running_processes;
   };
var phpServer = new BasicServer();
phpServer = phpServer.decorate('reverseProxy');
phpServer = phpServer.decorate('servePHP');
phpServer = phpServer.decorate('80');
phpServer = phpServer.decorate('serveStaticAssets');
phpServer.init();

var nodeServer = new BasicServer();
nodeServer = nodeServer.decorate('serveNode');
nodeServer = nodeServer.decorate('3000');
nodeServer.init();

