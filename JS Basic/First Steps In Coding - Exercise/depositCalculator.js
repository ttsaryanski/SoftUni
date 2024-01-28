function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let timeOfDeposit = Number(input[1]);
    let percent = Number(input[2]);
    let percentFromYear = depositSum * (percent/100);
    let percentFromDeposit = (percentFromYear / 12) * timeOfDeposit;
    let allSum = depositSum + percentFromDeposit;
    console.log(allSum);
}
depositCalculator(["200", "3", "5.7"])
depositCalculator(["2350", "6", "7"])