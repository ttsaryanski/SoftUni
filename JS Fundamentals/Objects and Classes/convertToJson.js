function convertToJson(name, lastName, hairColor) {

    let person = {name: name, lastName: lastName, hairColor: hairColor};
    
    console.log(JSON.stringify(person));
    
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');
