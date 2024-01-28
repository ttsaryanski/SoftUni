function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actor = Number(input[1]);
    let oneClothingPrice = Number(input[2]);
    let decorPrice = budget * 0.10;
    let allClothingPrice = actor * oneClothingPrice;
    if (actor > 150) {
        allClothingPrice *= 0.90;
    }
    let allMoviePrice = decorPrice + allClothingPrice;
    if (budget >= allMoviePrice) {
        let betterMoney = (budget - allMoviePrice).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${betterMoney} leva left.`);
    } 
    else {
        let moneyNeed = (allMoviePrice - budget).toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeed} leva more.`);
    }
}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);