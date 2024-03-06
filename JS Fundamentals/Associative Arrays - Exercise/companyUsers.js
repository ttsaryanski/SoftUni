function companyUsers(arr) {

    let list = {}

    for (let row of arr) {
        let [name, id] = row.split(' -> ');
        
        if (name in list) {
            if (!list[name].includes(id)) {
                list[name].push(id); 
            }
        } else {
            list[name] = [id];
        }
    }
    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, ids] of sorted) {
        console.log(`${name}`);
        for (let id of ids) {
            console.log(`-- ${id}`);
        }
    }
}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);
