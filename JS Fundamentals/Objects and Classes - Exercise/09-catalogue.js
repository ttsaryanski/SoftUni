function catalogue(array) {

    let result = [];

    for (let curRow of array) {
        let [productName, productPrice] = curRow.split(' : ');
        let curObj = { productName: productName, productPrice: productPrice};
        result.push(curObj);
    }
    let newResult = result.sort((a, b) => a.productName.localeCompare(b.productName));
    
    let letter = '';
    for (let curRow of newResult) {
        if (curRow.productName[0] === letter) {
            console.log(` ${curRow.productName}: ${curRow.productPrice}`);
        } else {
            letter = curRow.productName[0];
            console.log(letter);
            console.log(` ${curRow.productName}: ${curRow.productPrice}`);
        }
    }
    
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);
