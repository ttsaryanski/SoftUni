function gameNumberWars(input) {
    let gamer1 = input[0];
    let gamer2 = input[1];

    let gamer1Point = 0;
    let gamer2Point = 0;
    let winner = "";

    let i = 2;
    let command = input[i];
    let j = i + 1;

    while (command !== "End of game") {
        let gamer1Card = Number(command);
        let gamer2Card = Number(input[j]);
        if (gamer1Card > gamer2Card) {
            gamer1Point += (gamer1Card - gamer2Card);
            i+=2;
            command = input[i];
            j = i + 1;
        } else if (gamer1Card < gamer2Card) {
            gamer2Point += (gamer2Card - gamer1Card);
            i+=2;
            command = input[i];
            j = i + 1;
        } else {
            console.log(`Number wars!`);
            i+=2;
            j = i +1;
            gamer1Card = Number(input[i]);
            gamer2Card = Number(input[j]);
            if (gamer1Card > gamer2Card) {
                winner = gamer1;
                console.log(`${winner} is winner with ${gamer1Point} points`);
                break;
            } else if(gamer1Card < gamer2Card) {
                winner = gamer2;
                console.log(`${winner} is winner with ${gamer2Point} points`);
                break;
            }
            // command = input[i];
            // i++;
        }
    }
    if (command === "End of game") {
        console.log(`${gamer1} has ${gamer1Point} points`);
        console.log(`${gamer2} has ${gamer2Point} points`);
    }

}

gameNumberWars(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"]);

gameNumberWars(["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"]);

gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"]);