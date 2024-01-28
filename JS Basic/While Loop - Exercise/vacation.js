function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let location = "";
    let tipe = "";
    let price = 0;

    if (budget <= 1000) {
        tipe = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.65;
        } else {
            location = "Morocco";
            price = budget * 0.45;
        }
    }

    if (budget > 1000 && budget <= 3000) {
        tipe = "Hut";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.80;
        } else {
            location = "Morocco";
            price = budget * 0.60;
        }
    }

    if (budget > 3000) {
        tipe = "Hotel";
        price = budget * 0.90;
        if (season === "Summer") {
            location = "Alaska";
        } else {
            location = "Morocco";
        }
    }

    console.log(`${location} - ${tipe} - ${price.toFixed(2)}`);

}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);