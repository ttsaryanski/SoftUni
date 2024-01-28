function vetParking(input) {
    let dayCount = Number(input[0]);
    let hourCountPerDay = Number(input[1]);

    let totalTax = 0;

    for (let day = 1; day <= dayCount; day++) {
        let dayTax = 0;
        for (let hour = 1; hour <= hourCountPerDay; hour++) {
            if (day % 2 !== 0 && hour % 2 === 0) {
                dayTax += 1.25;
            } else if (day % 2 === 0 && hour % 2 !== 0) {
                dayTax += 2.50;
            } else {
                dayTax += 1;
            }
        }
        console.log(`Day: ${day} - ${dayTax.toFixed(2)} leva`);
        totalTax += dayTax;
    }
    console.log(`Total: ${totalTax.toFixed(2)} leva`);
    
}

//vetParking(["2", "5"]);
vetParking(["5", "2"]);