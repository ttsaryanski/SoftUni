function bestPlayer(input) {
    let i = 0;
    let command = input[i];
    i++;
    let winPlayer = "";
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let isHatTrick = true;

    while (command !== "END") {
        let playerName = command;
        let playerGoals = Number(input[i]);
        i++;

        if (playerGoals > maxGoals) {
            winPlayer = playerName;
            maxGoals = playerGoals;
            if (playerGoals < 3) {
                isHatTrick = false;
            } else{
                isHatTrick = true;
            }
            if (playerGoals >= 10) {
                console.log(`${winPlayer} is the best player!`);
                console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
                break;
            }
        }
        command = input[i];
        i++;

    }
    if (command === "END" && isHatTrick) {
        console.log(`${winPlayer} is the best player!`);
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    }
    if (command === "END" && !isHatTrick) {
        console.log(`${winPlayer} is the best player!`);
        console.log(`He has scored ${maxGoals} goals.`);
    }
    
}

// bestPlayer(["Neymar",
// "2",
// "Ronaldo",
// "1",
// "Messi",
// "3",
// "END"]);

// bestPlayer(["Silva",
// "5",
// "Harry Kane",
// "10"]);

// bestPlayer(["Petrov",
// "2",
// "Drogba",
// "11"]);

// bestPlayer(["Rooney",
// "1",
// "Junior",
// "2",
// "Paolinio",
// "2",
// "END"]);

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);