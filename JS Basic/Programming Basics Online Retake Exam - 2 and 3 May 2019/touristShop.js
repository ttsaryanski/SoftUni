function touristShop(input) {
    let budget = Number(input[0]);

    let fullProductCount = 0;
    let fullPrice = 0;

    let command = input[1];
    let i = 2;

    while (command !== "Stop") {
        let productName = command;
        let productPrice = Number(input[i]);
        i++;
        fullProductCount++;

        if (fullProductCount % 3 === 0) {
            productPrice *= 0.5;
        }
        
        if (productPrice <= budget) {
            fullPrice += productPrice;
            budget -= productPrice;
            
            command = input[i];
            i++;
        } else {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            break;
        }
    }
    if (command === "Stop") {
        console.log(`You bought ${fullProductCount} products for ${fullPrice.toFixed(2)} leva.`);
    }
}

touristShop(["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"]);

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"]);