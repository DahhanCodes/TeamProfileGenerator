//Bringing in the parent class
const Employee = require ("./employee")
//linking child class to parent class
class Engineer extends Employee {
    //extracting needed properties from parent and adding desired porperty
    constructor (name, id, email, github) {
         
        super (name, id, email);

        this.github = github; 
    }

    //creating a function that will return the child's class property 
    getGithub () {
        return this.github;
    }

     // overriding role
    getRole () {
        return "Engineer";
    }
}


module.exports = Engineer; 