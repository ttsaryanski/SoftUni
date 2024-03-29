function newHouse(input) {
    let varietyFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

        switch (varietyFlowers) {
            case "Roses":
                price = countFlowers * 5;
                if (countFlowers > 80) {
                    price *= 0.90;
                }
                break;
            case "Dahlias":
                price = countFlowers * 3.80;
                if (countFlowers > 90) {
                    price *= 0.85;
                }
                break;
            case "Tulips":
                price = countFlowers * 2.80;
                if (countFlowers > 80) {
                    price *= 0.85;
                }
                break;
            case "Narcissus":
                price = countFlowers * 3;
                if (countFlowers < 120) {
                    price *= 1.15;
                }
                break;
            case "Gladiolus":
                price = countFlowers * 2.50;
                if (countFlowers < 80) {
                    price *= 1.20;
                }
                break;
        
        }
        if (budget >= price) {
            console.log(`Hey, you have a great garden with ${countFlowers} ${varietyFlowers} and ${(budget - price).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
        }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);