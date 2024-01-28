function vegetableMarket(input) {
    let allPriceForVegetablesInLeva = (input[0]) * (input[2]);
    let allPriceForFruitsInLeva = (input[1]) * (input[3]);
    let allPriceInEuro = ((allPriceForVegetablesInLeva + allPriceForFruitsInLeva) / 1.94).toFixed(2);
  console.log(allPriceInEuro);  
}
vegetableMarket([0.194, 19.4, 10, 10]);
vegetableMarket([1.5, 2.5, 10, 10]);