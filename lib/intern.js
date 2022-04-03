//Bringing in the parent class
const Employee = require ("./employee")
//linking child class to parent class
class Intern extends Employee {
    //extracting needed properties from parent and adding desired porperty
    constructor (name, id, email, school) {
         
        super (name, id, email);

        this.school = school; 
    }

    // creating a function that will return the child's class property
    getSchool () {
        return this.school;
    }

     // overriding role
    getRole () {
        return "Intern";
    }
}


module.exports = Intern; 