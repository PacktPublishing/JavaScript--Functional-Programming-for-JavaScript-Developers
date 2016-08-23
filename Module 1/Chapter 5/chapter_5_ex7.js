// Factory Constructor
function CarFactory() {}
CarFactory.prototype.info = function() {
 console.log("This car has "+this.doors+" doors and a
   "+this.engine_capacity+" liter engine");
};
// the static factory method
CarFactory.make = function (type) {
   var constr = type;
   var car;
   CarFactory[constr].prototype = new CarFactory();
   // create a new instance
   car = new CarFactory[constr]();
   return car;
};
CarFactory.Compact = function () {
   this.doors = 4;
   this.engine_capacity = 2;
};
CarFactory.Sedan = function () {
  this.doors = 2;
  this.engine_capacity = 2;
};
CarFactory.SUV = function () {
  this.doors = 4;
  this.engine_capacity = 6;
};
var golf = CarFactory.make('Compact');
var vento = CarFactory.make('Sedan');
var touareg = CarFactory.make('SUV');
golf.info(); //"This car has 4 doors and a 2 liter engine"