function lowestPricesInCities(array) {

    let result = {};

    for (const row of array) {
        let [cityName, productName, productPrice] = row.split(' | ');
        productPrice = Number(productPrice);
        if (!result.hasOwnProperty(productName)) {
            result[productName] =  [[productPrice, cityName]]
        } else {
            result[productName].push([productPrice, cityName]);
        }
    }
    result = Object.entries(result);
    for (const product of result) {
        let [name, data] = product;
        data = data.sort((a, b) => a[0] - b[0]);
        console.log(`${name} -> ${data[0][0]} (${data[0][1]})`);
    }
    
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);