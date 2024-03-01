function schoolRegister(arr) {

    let list = [];
    for (let curRow of arr) {
        let row = curRow.split(', ');
        let nameInfo = row[0].split(': ');
        let gradeInfo = row[1].split(': ');
        let scoreInfo = row[2].split(': ');
        let curObj = { studentName: nameInfo[1], grade: Number(gradeInfo[1]), score: Number(scoreInfo[1])};
        list.push(curObj);
    }

    let newList = [];
    for (let row of list) {
        if (row.score >= 3) {
            newList.push(row);
        }
    }
    newList = newList.sort((a, b) => a.grade - b.grade);
    
    let final = [];
    for (const row of newList) {
        let nextClass = {};
        nextClass.name = [];
        nextClass.name.push(row.studentName);
        nextClass.grade = row.grade + 1;
        nextClass.score = row.score;
        nextClass.count = 1;
        let gradeIsInFinal = final.find(g => g.grade === nextClass.grade);
        if (gradeIsInFinal) {
            gradeIsInFinal.name.push(row.studentName);
            gradeIsInFinal.score += nextClass.score;
            gradeIsInFinal.count ++; 
        } else {
            final.push(nextClass);
        }
    }
    for (let row of final) {
        console.log(`${row.grade} Grade
List of students: ${row.name.join(', ')}
Average annual score from last year: ${(row.score / row.count).toFixed(2)}`);
        console.log();
    }
    
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]);
