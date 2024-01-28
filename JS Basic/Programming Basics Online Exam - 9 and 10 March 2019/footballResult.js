function footballResult(input) {
    let furstResult = input[0];
    let secondResult = input[1];
    let thirdResult = input[2];

    let win = 0;
    let lost = 0;
    let standoff = 0;

    if (furstResult[0] > furstResult[2]) {
        win++;
    } else if (furstResult[0] < furstResult[2]) {
        lost++;
    } else {
        standoff++;
    }

    if (secondResult[0] > secondResult[2]) {
        win++;
    } else if (secondResult[0] < secondResult[2]) {
        lost++;
    } else {
        standoff++;
    }

    if (thirdResult[0] > thirdResult[2]) {
        win++;
    } else if (thirdResult[0] < thirdResult[2]) {
        lost++;
    } else {
        standoff++;
    }
    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${standoff}`);
}

// footballResult(["3:1",
// "0:2",
// "0:0"]);

// footballResult(["4:2",
// "0:3",
// "1:0"]);

footballResult(["0:2",
"0:1",
"3:3"]);