function privateTest(){
     var points=0;
     this.getPoints=function(){
       return points;
     };
     this.score=function(){
		points++; 
	 };
}
var private = new privateTest();
private.score();
console.log(private.points); // undefined
console.log(private.getPoints());
