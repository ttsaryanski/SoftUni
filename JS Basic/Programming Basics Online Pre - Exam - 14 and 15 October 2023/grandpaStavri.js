function grandpaStavri(input) {
    let dayCount = Number(input[0]);

    let totalLitres = 0;
    let totalDegrees = 0;

    for(let i = 1; i < input.length; i+=2 ) {
        let litrePerDay = Number(input[i]);
        totalLitres += litrePerDay;

        let degreesPerDay = Number(input[i + 1]);
        let fullDegreesPerDay = litrePerDay * degreesPerDay;
        totalDegrees += fullDegreesPerDay;
    }
    console.log(`Liter: ${totalLitres.toFixed(2)}`);

    let avgDegrees = totalDegrees / totalLitres;

    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);
    
    if (avgDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avgDegrees >= 38 && avgDegrees <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }
    
}

// grandpaStavri(["3",
// "100",
// "45",
// "50",
// "55",
// "150",
// "36"]);

grandpaStavri(["2",
"200",
"43",
"200",
"40"]);