function basketballTournament(input) {
    let i = 0;
    let command = input[i];
    i++;
    let winGames = 0;
    let lostGames = 0;
    let totalGames = 0;
    
    while (command !== "End of tournaments") {
        let tournamentName = command;
        let gameCountTournament = Number(input[i]);
        i++;

        for (let gameNumberValue = 1; gameNumberValue <= gameCountTournament; gameNumberValue++) {
            let gameNumber = gameNumberValue;

            let goodPoints = Number(input[i]);
            let badPoints = Number(input[i + 1]);

            if (goodPoints > badPoints) {
                winGames++;
                console.log(`Game ${gameNumber} of tournament ${tournamentName}: win with ${goodPoints - badPoints} points.`);
            } else if (goodPoints < badPoints) {
                lostGames++;
                console.log(`Game ${gameNumber} of tournament ${tournamentName}: lost with ${badPoints - goodPoints} points.`);
            }
            totalGames++;
            i += 2;
        }
        command = input[i];
        i++;
    }
    if (command === "End of tournaments") {
        let avgWins = (winGames / totalGames) * 100;
        let avgLosts = (lostGames / totalGames) * 100;
        console.log(`${avgWins.toFixed(2)}% matches win`);
        console.log(`${avgLosts.toFixed(2)}% matches lost`);
    }
    
}

basketballTournament(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"]);

// basketballTournament(["Ballers",
// "3",
// "87",
// "63",
// "56",
// "65",
// "75",
// "64",
// "Sharks",
// "4",
// "64",
// "76",
// "65",
// "86",
// "68",
// "99",
// "45",
// "78",
// "End of tournaments"]);