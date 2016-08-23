//Object Notation
var nothing = {};
var author = {
	"firstname": "Douglas",
    "lastname": "Crockford"
}

var author_javascript = {
     firstname : "Douglas",
     lastname : "Crockford",
     book : {
       title:"JavaScript- The Good Parts",
       pages:"172"
     }
};
console.log(author_javascript['firstname']); //Douglas
console.log(author_javascript.lastname);     //Crockford
console.log(author_javascript.book.title);   // JavaScript- The Good Parts
console.log(author.age); //Undefined
console.log(author.age || "No Age Found"); //No Age Found

//Updating an object property
author.book.pages = 190;
console.log(author.book.pages); //190

//functions as object property
var meetingRoom = {};
   meetingRoom.book = function(roomId){
     console.log("booked meeting room -"+roomId);
}
meetingRoom.book("VL");
