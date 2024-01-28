function gymnastics(input) {
    let country = input[0];
    let equipment = input[1];

    let pointToRussia = 0;
    let pointToBulgaria = 0;
    let pointToItaly = 0;

    switch (country) {
        case "Russia":
            if (equipment === "ribbon") {
                pointToRussia = 9.100 + 9.400;
            } else if (equipment === "hoop") {
                pointToRussia = 9.300 + 9.800;
            } else {
                pointToRussia = 9.600 + 9.000;
            }
            let persentNeededRussia = ((20 - pointToRussia) / 20) * 100;
            console.log(`The team of ${country} get ${pointToRussia.toFixed(3)} on ${equipment}.`);
            console.log(`${persentNeededRussia.toFixed(2)}%`);
            break;
        case "Bulgaria":
            if (equipment === "ribbon") {
                pointToBulgaria = 9.600 + 9.400;
            } else if (equipment === "hoop") {
                pointToBulgaria = 9.550 + 9.750;
            } else {
                pointToBulgaria = 9.500 + 9.400;
            }
            let persentNeededBulgaria = ((20 - pointToBulgaria) / 20) * 100;
            console.log(`The team of ${country} get ${pointToBulgaria.toFixed(3)} on ${equipment}.`);
            console.log(`${persentNeededBulgaria.toFixed(2)}%`);
            break;
        case "Italy":
            if (equipment === "ribbon") {
                pointToItaly = 9.200 + 9.500;
            } else if (equipment === "hoop") {
                pointToItaly = 9.450 + 9.350;
            } else {
                pointToItaly = 9.700 + 9.150;
            }
            let persentNeededItaly = ((20 - pointToItaly) / 20) * 100;
            console.log(`The team of ${country} get ${pointToItaly.toFixed(3)} on ${equipment}.`);
            console.log(`${persentNeededItaly.toFixed(2)}%`);
            break;
    }
    
}

gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);