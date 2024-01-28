function triangleOfNumbers(endRow) {
    
    for (let curentRow = 1; curentRow <= endRow; curentRow++) {
        console.log(`${curentRow} `.repeat(curentRow));
    }

}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);
