function schoolGrades(arr) {

    let list = {};

    for (let row of arr) {
        let curStudent = row.split(' ');
        let studentaName = curStudent.shift();
        let sum = '';
        for (let curGrade of curStudent) {
            sum += `${curGrade} `;
        }
        if (studentaName in list) {
            list[studentaName] += sum;
        } else {
            list[studentaName] = sum;
        }
    }
    let listArr = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [name, gradesArr] of listArr) {
        let sum = 0;
        let count = 0;
        let grades = gradesArr.split(' ');
        grades.splice(grades.length - 1, 1);
        for (let num of grades) {
            sum += Number(num);
            count++;
        }
        console.log(`${name}: ${(sum / count).toFixed(2)}`);
    }
    
}

schoolGrades(
    ['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
schoolGrades(
    ['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);
