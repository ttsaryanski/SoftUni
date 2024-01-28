function toyShop(input) {
    let restPrice = Number(input[0]);
    let puzzlePrice = Number(input[1]) * 2.60;
    let dollsPrice = Number(input[2]) * 3;
    let bearsPrice = Number(input[3]) * 4.10;
    let minionsPrice = Number(input[4]) * 8.20;
    let truckPrice = Number(input[5]) * 2;
    let allToysPrice = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + truckPrice;
    let allToysNumbers = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]);
    if (allToysNumbers >= 50) {
        allToysPrice *= 0.75; 
    }
    let profit = allToysPrice * 0.90;
    if (profit >= restPrice) {
        let overMoney = (profit - restPrice).toFixed(2);
        console.log(`Yes! ${overMoney} lv left.`);
    } else {
        let moneyNeed = (restPrice - profit).toFixed(2);
        console.log(`Not enough money! ${moneyNeed} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);