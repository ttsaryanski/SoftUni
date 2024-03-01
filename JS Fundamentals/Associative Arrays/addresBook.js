function addresBook(arr) {

    let list = {};

    for (let row of arr) {
        let [name, adres] = row.split(':');
        list[name] = adres;
    }

    let listArr = Object.entries(list);
    let sortedArr = listArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let row of sortedArr) {
        console.log(`${row[0]} -> ${row[1]}`);
    }

}

// addresBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'
// ]);
addresBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);
