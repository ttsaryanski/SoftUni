function pets(input) {
    let dayCount = Number(input[0]);
    let allFood = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]) / 1000;
    let dogFoot = dayCount * dogFoodPerDay;
    let catFood = dayCount * catFoodPerDay;
    let turtleFood = dayCount * turtleFoodPerDay;
    let availableFood = dogFoot + catFood + turtleFood;

    if (availableFood >= allFood) {
        console.log(`${Math.ceil(availableFood - allFood)} kilos of food left.`);
    } else {
        console.log(`${Math.floor(allFood - availableFood)} more kilos of food are needed.`);
    }

}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);