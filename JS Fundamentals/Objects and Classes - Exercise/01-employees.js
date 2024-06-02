function employees(array) {

    for (let personName of array) {
        let Person = { name: personName, number: personName.length };
        console.log(`Name: ${Person.name} -- Personal Number: ${Person.number}`);
    }
    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
