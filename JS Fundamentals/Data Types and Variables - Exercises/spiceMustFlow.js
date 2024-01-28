function spiceMustFlow(maxProduce) {

    let day = 0;
    let fullDayProduce = 0;
    let dayProduce = maxProduce;
    let totalProduce = 0;

    while (dayProduce >= 100) {
        day++;
        fullDayProduce = dayProduce - 26;
        totalProduce += fullDayProduce;
        dayProduce -= 10;
    }

    if (totalProduce >= 26) {
        totalProduce -= 26;
    }
        
    console.log(day);
    console.log(totalProduce);
    
}

spiceMustFlow(111);
spiceMustFlow(450);
