function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);
    let price = 0;
    switch (city) {
        case "Sofia":
            if (product === "coffee") {
                price = qty * 0.50;
            } else if (product === "water") {
                price = qty * 0.80;
            } else if (product === "beer") {
                price = qty * 1.20;
            } else if (product === "sweets") {
                price = qty * 1.45;
            } else if (product === "peanuts") {
                price = qty * 1.60;
            }
            break;
        case "Plovdiv":
            if (product === "coffee") {
                price = qty * 0.40;
            } else if (product === "water") {
                price = qty * 0.70;
            } else if (product === "beer") {
                price = qty * 1.15;
            } else if (product === "sweets") {
                price = qty * 1.30;
            } else if (product === "peanuts") {
                price = qty * 1.50;
            }
            break; 
        case "Varna":
            if (product === "coffee") {
                price = qty * 0.45;
            } else if (product === "water") {
                price = qty * 0.70;
            } else if (product === "beer") {
                price = qty * 1.10;
            } else if (product === "sweets") {
                price = qty * 1.35;
            } else if (product === "peanuts") {
                price = qty * 1.55;
            }
            break;       

    }
    console.log(price);
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);