function fuelTankPart2(input) {
   let fuelTipe = input[0] ;
   let fuelCount = Number(input[1]);
   let clubCard = input[2];
   let fuelPrice = 0;
   
   switch (fuelTipe) {
    case "Gasoline":
        if (clubCard === "Yes") {
            fuelPrice = fuelCount * (2.22 - 0.18); 
        } else {
            fuelPrice = fuelCount * 2.22;
        }
        break;
    case "Diesel":
        if (clubCard === "Yes") {
            fuelPrice = fuelCount * (2.33 - 0.12);
        } else {
            fuelPrice = fuelCount * 2.33;
        }
        break;
    case "Gas":
        if (clubCard === "Yes") {
            fuelPrice = fuelCount * (0.93 - 0.08);
        } else {
            fuelPrice = fuelCount * 0.93;
        }
        break
   }

   if (fuelCount >= 20 && fuelCount <= 25) {
    fuelPrice *= 0.92;
   }

   if (fuelCount > 25) {
    fuelPrice *= 0.90;
   }

   console.log(`${fuelPrice.toFixed(2)} lv.`);
}

fuelTankPart2(["Gas", "30", "Yes"]);
fuelTankPart2(["Gasoline", "25", "No"]);
fuelTankPart2(["Diesel", "19", "No"]);