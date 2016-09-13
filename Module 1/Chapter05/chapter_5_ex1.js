function Car() {}
function BMW() {}
var engines = 1;
var features = {
	seats: 6,
	airbags:6 
};

// Single global object
var CARFACTORY = CARFACTORY || {};
CARFACTORY.Car = function () {};
CARFACTORY.BMW = function () {};
CARFACTORY.engines = 1;
CARFACTORY.features = {
	seats: 6,
	airbags:6 
};

