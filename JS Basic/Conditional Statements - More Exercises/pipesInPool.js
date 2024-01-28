function pipesInPool(input) {
    let capacity = Number(input[0]);
    let flowPipe1 = Number(input[1]);
    let flowPipe2 = Number(input[2]);
    let time = Number(input[3]);
    let waterFromPipe1 = flowPipe1 * time;
    let waterFromPipe2 = flowPipe2 * time;
    let fullWaterPerTime = waterFromPipe1 + waterFromPipe2;
    let waterFromPipe1InPercent = (waterFromPipe1 / fullWaterPerTime) * 100;
    let waterFromPipe2InPercent = (waterFromPipe2 / fullWaterPerTime) * 100;
    let fullWaterPerTimeInPercent = (fullWaterPerTime / capacity) * 100;
    
    if (fullWaterPerTime <= capacity) {
        console.log(`The pool is ${fullWaterPerTimeInPercent.toFixed(2)}% full. Pipe 1: ${waterFromPipe1InPercent.toFixed(2)}%. Pipe 2: ${waterFromPipe2InPercent.toFixed(2)}%.`);
    } else {
        console.log(`For ${time} hours the pool overflows with ${(fullWaterPerTime - capacity).toFixed(2)} liters.`);
        
    }

}

pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);