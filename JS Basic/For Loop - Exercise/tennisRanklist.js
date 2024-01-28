function tennisRanklist(input) {
    let tournament = Number(input[0]);
    let startPoint = Number(input[1]);
    let addedPoints = 0;
    let won = 0;

    for (let index = 2; index < input.length; index++) {
        let tournamentPosition = input[index];
        switch (tournamentPosition) {
            case "W": addedPoints += 2000; won += 1; break;
            case "F": addedPoints += 1200; break;
            case "SF": addedPoints += 720; break;
        }
    }
    fullPoint = startPoint + addedPoints;
    console.log(`Final points: ${fullPoint}`);

    console.log(`Average points: ${Math.floor(addedPoints / tournament)}`);

    console.log(`${((won / tournament) * 100).toFixed(2)}%`);
    
}

// tennisRanklist([
// "5",
// "1400",
// "F",
// "SF",
// "W",
// "W",
// "SF"]);

// tennisRanklist([
// "4",
// "750",
// "SF",
// "W",
// "SF",
// "W"]);

tennisRanklist([
"7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"]);