function skiTrip(input) {
    let dayCount = Number(input[0]);
    let tipeRoom = input[1];
    let rating = input[2];
    let price = 0;

    switch (tipeRoom) {
        case "room for one person":
            price = (dayCount - 1) * 18.00;
            break;
        case "apartment":
            price = (dayCount -1) * 25.00;
            if (dayCount < 10) {
                price *= 0.70;
            } else if (dayCount >= 10 && dayCount <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = (dayCount - 1) * 35.00;
            if (dayCount < 10) {
                price *= 0.90;
            } else if (dayCount >= 10 && dayCount <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;
    
        default:
            break;
    }
    if (rating === "positive") {
        price *= 1.25;
    } else {
        price *= 0.90;
        
    }
    console.log(price.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);