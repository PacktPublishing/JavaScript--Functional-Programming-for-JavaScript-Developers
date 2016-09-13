var person = {
 firstname: "Albert",
 lastname: "Einstein",
};
Object.defineProperty(person, 'fullname', {
 get: function() {
   return this.firstname + ' ' + this.lastname;
 },
 set: function(name) {
   var words = name.split(' ');
   this.firstname = words[0];
   this.lastname = words[1];
} });
person.fullname = "Issac Newton";
console.log(person.firstname); //"Issac"
console.log(person.lastname);  //"Newton"
console.log(person.fullname);  //"Issac Newton"