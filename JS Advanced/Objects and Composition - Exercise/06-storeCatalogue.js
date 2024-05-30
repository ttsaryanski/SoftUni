function storeCatalogue(array) {

    let result = {};

    for (const row of array) {
        let [name, price] = row.split(' : ');
        price = Number(price);
        result[name] = price;
    }
    result = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    let groupLetter = '';
    for (const product of result) {
        let [name, price] = product;
        if (groupLetter !== name[0]) {
            groupLetter = name[0];
            console.log(groupLetter);
        }
        console.log(`  ${name}: ${price}`);
    }
    
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);
