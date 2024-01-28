function fitnessCenter(input) {
    let peopleCount = Number(input[0]);

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;
    let fitnessCount = 0;
    let proteinCount = 0;

    for(let i = 1; i < input.length; i++) {
        let command = input[i];
        if (command === "Back") {
            backCount++;
            fitnessCount++;
        } else if (command === "Chest") {
            chestCount++;
            fitnessCount++;
        } else if (command === "Legs") {
           legsCount++;
           fitnessCount++;
        } else if (command === "Abs") {
            absCount++;
            fitnessCount++;
        } else if (command === "Protein shake") {
            proteinShakeCount++;
            proteinCount++;
        } else if (command === "Protein bar") {
            proteinBarCount++;
            proteinCount++;
        }
    }
    let avgFitness = (fitnessCount / peopleCount) * 100;
    let avgProtein = (proteinCount / peopleCount) * 100;
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);
    console.log(`${avgFitness.toFixed(2)}% - work out`);
    console.log(`${avgProtein.toFixed(2)}% - protein`);
    
}

fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"]);

// fitnessCenter(["7",
// "Chest",
// "Back",
// "Legs",
// "Legs",
// "Abs",
// "Protein shake",
// "Protein bar"]);