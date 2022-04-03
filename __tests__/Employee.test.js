// Bringing in the Employee class
const Employee = require('../lib/employee');

// Creating an employee template to test
test('creates an employee object', () => {
    const employee = new Employee('Dahhan', 2, 'moustafaeldahhan@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringMatching(/^\S+@\S+$/));
});

// Testing for valid name input
// will use getName() method which imported with the Employee class
test('gets employee name', () => {
    const employee = new Employee('Dahhan', 2, 'moustafaeldahhan@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Testing for valid ID input
// using getId() method
test('gets employee ID', () => {
    const employee = new Employee('Dahhan', 2, 'moustafaeldahhan@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Testing for valid email address input
// gets emails from getEmail() method and testing it against RegExp
test('gets employee email', () => {
    const employee = new Employee('Dahhan', 2, 'moustafaeldahhan@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringMatching(/^\S+@\S+$/));
});

// Testing to check for a matching role
// using getRole() method to capture the role
test('gets role of employee', () => {
    const employee = new Employee('Dahhan', 2, 'moustafaeldahhan@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});