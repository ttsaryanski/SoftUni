function braceletStand(input) {
    let pocketMoneyPerDay = Number(input[0]);
    let soldsMoneyPerDay = Number(input[1]);
    let allExpense = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedPocketMoney = pocketMoneyPerDay * 5;
    let savedSoldsMoney = soldsMoneyPerDay * 5;
    let fullSavedMoney = savedPocketMoney + savedSoldsMoney;
    let finalMoney = fullSavedMoney - allExpense;

    if (finalMoney >= giftPrice) {
        console.log(`Profit: ${finalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - finalMoney).toFixed(2)} BGN.`);
    }

}

braceletStand(["5.12",
"32.05",
"15",
"150"]);

braceletStand(["2.10",
"17.50",
"20.20",
"148.50"]);

braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"]);