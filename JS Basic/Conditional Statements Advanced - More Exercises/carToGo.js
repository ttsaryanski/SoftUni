function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let classe = "";
    let tipe = "";
    let price = 0;

    if (budget <= 100) {
        classe = "Economy class";
        if (season === "Summer") {
            tipe = "Cabrio";
            price = budget * 0.35;
        } else {
            tipe = "Jeep";
            price = budget * 0.65;
        }
    }

    if (budget > 100 && budget <= 500) {
        classe = "Compact class";
        if (season === "Summer") {
            tipe = "Cabrio";
            price = budget * 0.45;
        } else {
            tipe = "Jeep";
            price = budget * 0.80;
        }
    }

    if (budget > 500) {
        classe = "Luxury class"
        tipe = "Jeep";
        price = budget * 0.90;
    }

    console.log(classe);
    console.log(`${tipe} - ${price.toFixed(2)}`);
    
}

carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["99.99", "Summer"]);
carToGo(["1010", "Winter"]);
carToGo(["70.50", "Winter"]);