const Employee = require ("./employee")
//linking child class to parent class
class Manager extends Employee {
    //extracting needed properties from parent and adding desired porperty
    constructor (name, id, email, office) {
         
        super (name, id, email);

        this.office = office; 
    }

    // creating a function that will return the child's class property 
    getOffice () {
        return this.office;
    }

     // overriding role
    getRole () {
        return "Manager";
    }
}


module.exports = Manager; 