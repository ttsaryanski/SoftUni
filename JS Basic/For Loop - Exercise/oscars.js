function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);

    let totalPoints = 0;

    for (let index = 3; index < input.length; index += 2) {
        let judgeName = input[index];
        let judgePoint = Number(input[index + 1]);

        let wonPoint = judgeName.length * judgePoint / 2;
        academyPoints += wonPoint;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
            
        }
        
        
    }
    if (academyPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
    

}

// oscars(["Zahari Baharov",
// "205",
// "4",
// "Johnny Depp",
// "45",
// "Will Smith",
// "29",
// "Jet Lee",
// "10",
// "Matthew Mcconaughey",
// "39"]);

oscars([
"Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);