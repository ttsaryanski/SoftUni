function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actorCount = Number(input[1]);
    let clothingPrice = Number(input[2]);
    let decorPrice = budget * 0.10;
    let fullClothingPrice = actorCount * clothingPrice;
    if (actorCount >= 150) {
        fullClothingPrice = fullClothingPrice * 0.90;
    }
    let finalMoviePrice = decorPrice + fullClothingPrice;
    if (budget >= finalMoviePrice) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - finalMoviePrice).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalMoviePrice - budget).toFixed(2)} leva more.`);
        
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);