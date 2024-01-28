function trainTheTrainers(input) {
    let gudgeCount = Number(input[0]);
    let totalGrade = 0;
    let examCount = 0;

    let command = input[1];
    let i = 2;

    while (command !== "Finish") {
        let presentationName = command;
        examCount++;
        let endGrade = 0;
        
        for (let value = 1; value <= gudgeCount; value++) {
            let grade = Number(input[i]);
            i++;
            endGrade += grade;
        }
        let avgGrade = endGrade / gudgeCount;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);
        command = input[i];
        i++;
        totalGrade += avgGrade;
    }
    if (command === "Finish") {
        console.log(`Student's final assessment is ${(totalGrade / examCount).toFixed(2)}.`); 
    }
    
}

// trainTheTrainers(["2",
// "While-Loop",
// "6.00",
// "5.50",
// "For-Loop",
// "5.84",
// "5.66",
// "Finish"]);

// trainTheTrainers(["3",
// "Arrays",
// "4.53",
// "5.23",
// "5.00",
// "Lists",
// "5.83",
// "6.00",
// "5.42",
// "Finish"]);

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);
