const Manager = require('../lib/manager');

// creating a new Manager as a template for testing
test('creates a Manager template', () => {
    const manager= new Manager('Dahhan', 1, 'moustafaeldahhan@gmail.com',123);
    //testing for valid input for the office number
    expect(manager.office).toEqual(expect.any(Number));
});


// Testing to make sure Role matches
test('gets role of employee', () => {
    const manager = new Manager('Dahhan', 1, 'moustafaeldahhan@gmail.com',123);

    expect(manager.getRole()).toEqual("Manager");
});