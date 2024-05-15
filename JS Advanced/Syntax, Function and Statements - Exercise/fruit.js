function fruit(fruitName, weightInGrams, priceForKg) {

    let weightInKg = weightInGrams / 1000;
    let neededMoney = weightInKg * priceForKg;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`);
    
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
