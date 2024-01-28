function darts(input) {
    let playerName = input[0];
    let startPoint = 301;
    let validShotCount = 0;
    let inValidShotCount = 0;

    let i = 1;
    let command = input[i];
    i++;

    while (command !== "Retire") {
        let points = 0;
        let isValidShot = true;
        let sectorType = command;
        let sectorPoint = input[i];
        i++;
        if (sectorType === "Single") {
            points = sectorPoint;
            if (points > startPoint) {
                isValidShot = false;
                inValidShotCount++;
                command = input[i];
                i++;
                continue;
            } else {
                validShotCount++;
                startPoint -= points;
                if (startPoint === 0) {
                    console.log(`${playerName} won the leg with ${validShotCount} shots.`);
                    break;
                }
            }
            command = input[i];
            i++;
        } else if (sectorType === "Double") {
            points = sectorPoint * 2;
            if (points > startPoint) {
                isValidShot = false;
                inValidShotCount++;
                command = input[i];
                i++;
                continue;
            } else {
                validShotCount++;
                startPoint -= points;
                if (startPoint === 0) {
                    console.log(`${playerName} won the leg with ${validShotCount} shots.`);
                    break;
                }
            }
            command = input[i];
            i++;
        } else if (sectorType === "Triple") {
            points = sectorPoint * 3;
            if (points > startPoint) {
                isValidShot = false;
                inValidShotCount++;
                command = input[i];
                i++;
                continue;
            } else {
                validShotCount++;
                startPoint -= points;
                if (startPoint === 0) {
                    console.log(`${playerName} won the leg with ${validShotCount} shots.`);
                    break;
                }
            }
            command = input[i];
            i++;
        }
    }
    if (command === "Retire") {
        console.log(`${playerName} retired after ${inValidShotCount} unsuccessful shots.`);
    }
    
}

// darts(["Michael van Gerwen",
// "Triple",
// "20",
// "Triple",
// "19",
// "Double",
// "10",
// "Single",
// "3",
// "Single",
// "1",
// "Triple",
// "20",
// "Triple",
// "20",
// "Double",
// "20"]);

// darts(["Stephen Bunting",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Double",
// "7",
// "Single",
// "12",
// "Double",
// "1",
// "Single",
// "1"]);

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);