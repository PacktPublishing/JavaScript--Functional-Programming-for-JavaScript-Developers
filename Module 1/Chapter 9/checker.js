var Geo = function(geo) {
  this.geo = geo;
}
Geo.prototype.area = function (r) {
  return 3.14 * r * r;
};
Geo.prototype.circumference = function (r) {
  return 3.14 * 3.14 * r;
};
module.exports = Geo;
