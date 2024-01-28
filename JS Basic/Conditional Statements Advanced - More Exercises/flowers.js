function flowers(input) {
    let chrysanthemusCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemusPrice = 0;
    let rosesPrice = 0;
    let tulipPrice = 0;
    let price = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemusPrice = chrysanthemusCount * 2.00;
            rosesPrice = rosesCount * 4.10;
            tulipPrice = tulipCount * 2.50;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemusPrice = chrysanthemusCount * 3.75;
            rosesPrice = rosesCount * 4.50;
            tulipPrice = tulipCount * 4.15;
            break;
    }

    if (holiday === "Y") {
        chrysanthemusPrice *= 1.15;
        rosesPrice *= 1.15;
        tulipPrice *= 1.15;    
    }
     
    price = chrysanthemusPrice + rosesPrice + tulipPrice;

    if (season === "Spring" && tulipCount > 7) {
        price *= 0.95;
    } else if (season === "Winter" && rosesCount >= 10) {
        price *= 0.90;
    } 
    
    if ((chrysanthemusCount + rosesCount + tulipCount) > 20) {
        price *= 0.80;
    }

    price +=2;
    console.log(price.toFixed(2));

}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);