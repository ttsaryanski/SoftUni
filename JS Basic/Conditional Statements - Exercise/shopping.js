function shopping(input) {
    let budget = Number(input[0]);
    let vgaNumbers = Number(input[1]);
    let cpuNumbers = Number(input[2]);
    let ramNumbers = Number(input[3]);
    let vgaPrice = vgaNumbers * 250;
    let cpuPrice = (0.35 * vgaPrice) * cpuNumbers;
    let ramPrice = (0.10 * vgaPrice) * ramNumbers;
    let allPrice = vgaPrice + cpuPrice + ramPrice;
    if (vgaNumbers > cpuNumbers) {
        allPrice *= 0.85;
    }
    if (budget >= allPrice) {
        let freeMoney = (budget - allPrice).toFixed(2);
        console.log(`You have ${freeMoney} leva left!`)
    }
    else {
        let needMoney = (allPrice - budget).toFixed(2);
        console.log(`Not enough money! You need ${needMoney} leva more!`)
    }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);