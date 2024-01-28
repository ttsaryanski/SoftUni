function cleverLily(input) {
    let age = Number(input[0]);
    let vashingPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let birthdayMoney = 10;
    let savedMoney = 0
    let sum = 0;

    for (let birthDay = 1; birthDay <= age; birthDay++) {

        if (birthDay % 2 !== 0) {
            sum += toyPrice;
        } else {
            savedMoney = birthdayMoney - 1;
            birthdayMoney += 10;
            sum += savedMoney;
        }
    }

    if (sum >= vashingPrice) {
        console.log(`Yes! ${(sum - vashingPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(vashingPrice - sum).toFixed(2)}`);
    }
    
}

// cleverLily([
// "10",
// "170.00",
// "6"]);

cleverLily([
"21",
"1570.98",
"3"]);