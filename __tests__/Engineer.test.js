const Engineer = require('../lib/eng');

// creating template engineer for testing
test('creates an Engineer object', () => {
    const engineer = new Engineer('Dahhan', 4, 'moustafaeldahhan@gmail.com', 'DahhanCodes');
    //testing for a vaild github input
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Dahhan', 4, 'moustafaeldahhan@gmail.com', 'DahhanCodes');

    expect(engineer.getRole()).toEqual("Engineer");
});