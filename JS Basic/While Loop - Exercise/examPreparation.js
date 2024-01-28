function examPreparation(input) {
    let maxBadGrade = Number(input[0]);
    let badGradeCount = 0;
    let goodGradeCount = 0;
    let sum = 0;
    let lastExam = "";

    let command = input[1];
    let i = 2;

    while (command !== "Enough") {
        let grade = Number(input[i]);
        i++;
        if (grade <= 4) {
            badGradeCount++;
            sum += grade;
        } else {
            goodGradeCount++;
            sum += grade;
        }
        if (badGradeCount === maxBadGrade) {
            console.log(`You need a break, ${badGradeCount} poor grades.`);
            break;
        }
        lastExam = command;
        command = input[i];
        i++;
    }
    if (command === "Enough") {
    console.log(`Average score: ${(sum / (goodGradeCount + badGradeCount)).toFixed(2)}`);
    console.log(`Number of problems: ${goodGradeCount + badGradeCount}`);
    console.log(`Last problem: ${lastExam}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);

// examPreparation(["2",
// "Income",
// "3",
// "Game Info",
// "6",
// "Best Player",
// "4"]);