var person = {
 firstname: "Albert",
 lastname: "Einstein",
 get fullname() {
   return this.firstname +" "+this.lastname;
 },
 set fullname(_name){
   var words = _name.toString().split(' ');
   this.firstname = words[0];
   this.lastname = words[1];
} };
person.fullname = "Issac Newton";
console.log(person.firstname); //"Issac"
console.log(person.lastname);  //"Newton"
console.log(person.fullname);  //"Issac Newton"