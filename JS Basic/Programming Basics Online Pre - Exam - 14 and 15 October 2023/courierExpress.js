function courierExpress(input) {
    let weightShipment = Number(input[0]);
    let shipmentType = input[1];
    let distance = Number(input[2]);

    let shipmentPrice = 0;

    switch (shipmentType) {
        case "standard":
            if (weightShipment < 1) {
                shipmentPrice = distance * 0.03;
            } else if (weightShipment >= 1 && weightShipment < 10) {
                shipmentPrice = distance * 0.05;
            } else if (weightShipment >= 10 && weightShipment < 40) {
                shipmentPrice = distance * 0.10;
            } else if (weightShipment >= 40 && weightShipment < 90) {
                shipmentPrice = distance * 0.15;
            } else if (weightShipment >= 90 && weightShipment < 150) {
                shipmentPrice = distance * 0.20;
            }
            break;
    
        case "express":
            if (weightShipment < 1) {
                let markUpOneKm = 0.03 * 0.80;
                let markUpPerKg = weightShipment * markUpOneKm;
                let finallMarkUp = markUpPerKg * distance;
                shipmentPrice = (distance * 0.03) + finallMarkUp;
            } else if (weightShipment >= 1 && weightShipment < 10) {
                let markUpOneKm = 0.05 * 0.40;
                let markUpPerKg = weightShipment * markUpOneKm;
                let finallMarkUp = markUpPerKg * distance;
                shipmentPrice = (distance * 0.05) + finallMarkUp;
            } else if (weightShipment >= 10 && weightShipment < 40) {
                let markUpOneKm = 0.10 * 0.05;
                let markUpPerKg = weightShipment * markUpOneKm;
                let finallMarkUp = markUpPerKg * distance;
                shipmentPrice = (distance * 0.10) + finallMarkUp;
            } else if (weightShipment >= 40 && weightShipment < 90) {
                let markUpOneKm = 0.15 * 0.02;
                let markUpPerKg = weightShipment * markUpOneKm;
                let finallMarkUp = markUpPerKg * distance;
                shipmentPrice = (distance * 0.15) + finallMarkUp;
            } else if (weightShipment >= 90 && weightShipment < 150) {
                let markUpOneKm = 0.20 * 0.01;
                let markUpPerKg = weightShipment * markUpOneKm;
                let finallMarkUp = markUpPerKg * distance;
                shipmentPrice = (distance * 0.20) + finallMarkUp;
            }
            break;
    }
    console.log(`The delivery of your shipment with weight of ${weightShipment.toFixed(3)} kg. would cost ${shipmentPrice.toFixed(2)} lv.`);
    
}

courierExpress(["1.5",
"standard",
"100"]);

courierExpress(["87",
"express",
"130"]);

courierExpress(["20", 
"standard",
"349"]);