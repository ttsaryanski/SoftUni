function listOfProducts(array) {

    array.sort();

    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
    
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
