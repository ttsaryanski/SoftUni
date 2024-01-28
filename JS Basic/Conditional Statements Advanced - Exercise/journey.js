function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let tipe = "";
    let price = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                price = budget * 0.30;
                destination = "Bulgaria" ;
                tipe = "Camp";
            } else if (budget <= 1000) {
                price = budget * 0.40;
                destination = "Balkans";
                tipe = "Camp";
            } else {
                price = budget * 0.90;
                destination = "Europe";
                tipe = "Hotel";
            }
            break;
        case "winter":
            if (budget <= 100) {
                price = budget * 0.70;
                destination = "Bulgaria" ;
                tipe = "Hotel";
            } else if (budget <= 1000) {
                price = budget * 0.80;
                destination = "Balkans";
                tipe = "Hotel";
            } else {
                price = budget * 0.90;
                destination = "Europe";
                tipe = "Hotel";
            }

            break;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${tipe} - ${(price).toFixed(2)}`);

}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);