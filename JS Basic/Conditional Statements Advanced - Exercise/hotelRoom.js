function hotelRoom(input) {
    let mount = input[0];
    let nightCount = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    switch (mount) {
        case "May":
        case "October":
            priceStudio = nightCount *50;
            priceApartment = nightCount *65;
            if (nightCount > 7 && nightCount <= 14) {
                priceStudio *= 0.95;
            } else if (nightCount > 14) {
                priceStudio *= 0.70;
            }
            break;
        
        case "June":
        case "September":
            priceStudio = nightCount *75.20;
            priceApartment = nightCount *68.70;
            if (nightCount > 14) {
                priceStudio *= 0.80;
            }
            break;

        case "July":
        case "August":
            priceStudio = nightCount *76;
            priceApartment = nightCount *77;
            break;
    }

    if (nightCount > 14) {
        priceApartment *= 0.90;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);