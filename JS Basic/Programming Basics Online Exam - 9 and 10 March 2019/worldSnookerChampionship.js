function worldSnookerChampionship(input) {
    let stageType = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let foto = input[3];

    let fullPrice = 0;

    switch (stageType) {
        case "Quarter final":
            if (ticketType === "Standard") {
                fullPrice += ticketCount * 55.50;
            } else if (ticketType === "Premium") {
                fullPrice += ticketCount * 105.20;
            } else if (ticketType === "VIP") {
                fullPrice += ticketCount * 118.90;
            }
            break;
        case "Semi final":
            if (ticketType === "Standard") {
                fullPrice += ticketCount * 75.88;
            } else if (ticketType === "Premium") {
                fullPrice += ticketCount * 125.22;
            } else if (ticketType === "VIP") {
                fullPrice += ticketCount * 300.40;
            }
            break;
        case "Final":
            if (ticketType === "Standard") {
                fullPrice += ticketCount * 110.10;
            } else if (ticketType === "Premium") {
                fullPrice += ticketCount * 160.66;
            } else if (ticketType === "VIP") {
                fullPrice += ticketCount * 400;
            }    
            break;
    }
    if (fullPrice > 4000) {
        fullPrice *= 0.75;
        console.log(fullPrice.toFixed(2));
    } else if (fullPrice > 2500 && fullPrice <= 4000 ) {
        fullPrice *= 0.90;
        if (foto === "Y") {
            fullPrice += ticketCount * 40;
        }
        console.log(fullPrice.toFixed(2));
    } else if (fullPrice <= 2500 && foto === "Y") {
        fullPrice += ticketCount * 40;
        console.log(fullPrice.toFixed(2));
    } else if (fullPrice <= 2500 && foto === "N") {
        console.log(fullPrice.toFixed(2));
    }
}

worldSnookerChampionship(["Final",
"Premium",
"25",
"Y"]);

worldSnookerChampionship(["Semi final",
"VIP",
"9",
"Y"]);

worldSnookerChampionship(["Quarter final",
"Standard",
"11",
"N"]);

