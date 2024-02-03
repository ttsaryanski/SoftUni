function graduation(input) {
    let studentName = input[0];
    let grade = 1;
    let badGrade = 0;
    let sum = 0;

    //let i = 1;
    let value = Number(input[grade]);

    while (grade <= 12) {
        if (value < 4) {
            badGrade++;
        }
        if (badGrade > 1) {
            console.log(`${studentName} has been excluded at ${grade -1} grade`);
            break;
        }

         sum += value;
        grade ++;
        value = Number(input[grade]);
        
    }

    if (badGrade < 2) {
        console.log(`${studentName} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    }
    

    
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);