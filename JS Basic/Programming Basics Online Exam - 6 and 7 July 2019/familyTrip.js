function familyTrip(input) {
    let budget = Number(input[0]);
    let nightCount = Number(input[1]);
    let nightPrice = Number(input[2]);

    if (nightCount > 7) {
        nightPrice *= 0.95;
    }

    let autPercent = Number(input[3]);
    let finalNightPrice = nightCount * nightPrice;
    let fullPrice = finalNightPrice + (budget * (autPercent / 100));

    if (fullPrice <= budget) {
        console.log(`Ivanovi will be left with ${(budget - fullPrice).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(fullPrice - budget).toFixed(2)} leva needed.`);
    }

}

familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);