function Employee() {
     this.name = '';
     this.dept = 'None';
     this.salary = 0.00;
}
function Manager() {
 Employee.call(this);
 this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function IndividualContributor() {
   Employee.call(this);
   this.active_projects = [];
 }
 IndividualContributor.prototype = Object.create(Employee.prototype);
 function TeamLead() {
   Manager.call(this);
   this.dept = "Software";
   this.salary = 100000;
 }
 TeamLead.prototype = Object.create(Manager.prototype);
 function Engineer() {
   TeamLead.call(this);
   this.dept = "JavaScript";
   this.desktop_id = "8822" ;
   this.salary = 80000;
 }
Engineer.prototype = Object.create(TeamLead.prototype);

var genericEmployee = new Employee();
console.log(genericEmployee);