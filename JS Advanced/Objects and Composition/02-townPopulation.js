function townPopulation(array) {

    let listObj = {};

    for (const row of array) {
        let [name, population] = row.split(' <-> ');

        if (!listObj[name]) {
            listObj[name] = 0;
        }
        listObj[name] += Number(population);
    }

    for (const name in listObj) {
        console.log(`${name} : ${listObj[name]}`);
    }

}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
