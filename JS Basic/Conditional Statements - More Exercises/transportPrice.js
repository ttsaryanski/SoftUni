function transportPrice(input) {
    let distance = Number(input[0]);
    let partOfDay = input[1];
    let priceTaxi = 0;
    let priceBus = 0;
    let priceTrain = 0;

    if (distance >= 20) {
        priceBus = distance * 0.09;
    } 

    if (distance >= 100) {
        priceTrain = distance * 0.06;
    }
 
    if (partOfDay === "day") {
        priceTaxi = (distance * 0.79) + 0.70;
    } else {
        priceTaxi = (distance * 0.90) + 0.70
    }

    if (priceBus === 0 && priceTrain === 0) {
        console.log(priceTaxi.toFixed(2));
    }

    if (priceTrain === 0 && priceBus !== 0) {
        if (priceTaxi < priceBus) {
            console.log(priceTaxi.toFixed(2));
        } else {
            console.log(priceBus.toFixed(2));
        }
    }
     
    if (priceTrain !== 0) {
        if (priceTrain < priceBus && priceTrain < priceBus) {
            console.log(priceTrain.toFixed(2));
        }
    }

}
 
transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);