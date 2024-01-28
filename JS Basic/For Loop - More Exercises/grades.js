function grades(input) {
    let studentCount = Number(input[0]);
    let studentGrade = 0;
    let top = 0;
    let veryGood = 0;
    let good = 0;
    let fail = 0;
    let allGrade = 0;

    for (let i = 1; i < input.length; i++) {
        studentGrade = Number(input[i]);
        if (studentGrade >= 5.00) {
            top += 1;
        } else if (studentGrade >= 4.00 && studentGrade <= 4.99) {
            veryGood += 1;
        } else if (studentGrade >= 3.00 && studentGrade <= 3.99) {
            good += 1;
        } else if (studentGrade >= 2.00 && studentGrade < 3.00) {
            fail += 1;
        }
        allGrade += studentGrade
    }

    console.log(`Top students: ${((top / studentCount) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((veryGood / studentCount) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((good / studentCount) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / studentCount) * 100).toFixed(2)}%`);
    console.log(`Average: ${(allGrade / studentCount).toFixed(2)}`);
    
}

grades(["10",
"3",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6",
"4.5",
"2.44",
"5"]);

// grades(["10",
// "3.00",
// "2.99",
// "5.68",
// "3.01",
// "4",
// "4",
// "6.00",
// "4.50",
// "2.44",
// "5"]);

// grades(["6",
// "2",
// "3",
// "4",
// "5",
// "6",
// "2.2"]);
