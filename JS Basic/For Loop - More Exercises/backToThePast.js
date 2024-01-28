function backToThePast(input) {
    let inheritance = Number(input[0]);
    let targetYear = Number(input[1]);
    let actualYear = 18;
    let evvenMoney = 12000;
    let oddMoney = 0;
    let sum = 0;

    for (let year = 1800; year <= targetYear; year++) {
        if (year % 2 === 0) {
            sum += evvenMoney;
        } else {
            oddMoney = 12000 + (50 * actualYear);
            sum += oddMoney;
        }
        actualYear +=1;
    }

    if (sum <= inheritance) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritance - sum).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(sum - inheritance).toFixed(2)} dollars to survive.`);
    }
    
}

backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);
