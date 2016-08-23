var person = {
 firstname: "Albert",
 lastname: "Einstein",
 setLastName: function(_lastname){
   this.lastname= _lastname;
 },
 setFirstName: function (_firstname){
   this.firstname= _firstname;
 },
 getFullName: function (){
   return this.firstname + ' '+ this.lastname;
 }
};
person.setLastName('Newton');
person.setFirstName('Issac');
console.log(person.getFullName());