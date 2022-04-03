const Intern = require('../lib/Intern');

// Creating a template intern
test('checks if the school is a valid answer', () => {
    const intern = new Intern('Dahhan', 3, 'moustafaeldahhan@gmai.com', 'McMaster');
    //testing for valid school input
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Testing if role matches correctly
test('gets role of employee', () => {
    const intern = new Intern('Dahhan', 3, 'moustafaeldahhan@gmail.com', 'McMaster');

    expect(intern.getRole()).toEqual("Intern");
});