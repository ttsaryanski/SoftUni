function harvest(input) {
    let area = Number(input[0]);
    let grapesM2 = Number(input[1]);
    let targetVine = Number(input[2]);
    let workerCount = Number(input[3]);
    let fullGrapes = area * grapesM2;
    let grapesPerVine = fullGrapes * 0.40;
    let resultVine = grapesPerVine / 2.5;

    if (resultVine < targetVine) {
        console.log(`It will be a tough winter! More ${Math.floor(targetVine - resultVine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(resultVine)} liters.`);
        console.log(`${Math.ceil(resultVine - targetVine)} liters left -> ${Math.ceil((resultVine - targetVine) / workerCount)} liters per person.`);
        
    }
    
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);