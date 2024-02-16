function bonusScoringSystem(array) {

    let studentCount = Number(array.shift());
    let lecturesNumber = Number(array.shift());
    let bonus = Number(array.shift());

    let curMaxBonus = 0;
    let curLectures = 0;

    for (let student of array) {
        lectures = Number(student);
        let totalBonus = lectures / lecturesNumber * (5 + bonus);
        if (totalBonus > curMaxBonus) {
            curMaxBonus = totalBonus;
            curLectures = lectures;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(curMaxBonus)}.`);
    console.log(`The student has attended ${curLectures} lectures.`);
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem(["10", "30", "14", "8", "23", "27", "28", "15", "17", "25", "26", "5", "18",]);
