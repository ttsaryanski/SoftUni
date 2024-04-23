function softUniStudents(arr) {
    
    let listObj = {};

    for (let row of arr) {
        if (row.includes(':')) {
            let [courseName, capacity] = row.split(': ');
            capacity = Number(capacity);
            if (!listObj.hasOwnProperty(courseName)) {
                listObj[courseName] = { capacity: capacity, students: [] };
            } else {
                listObj[courseName].capacity += capacity;
            }
        } else {
            let token = row.replace(' with email', '').replace(' joins', '');
            let [user, email, course] = token.split(' ');
            let [userName, credits] = user.split('[');
            credits = Number(credits.substring(0, credits.length - 1));
            
            if (course in listObj && listObj[course].capacity > listObj[course].students.length) {
                listObj[course].students.push([credits, userName, email]);
            }
        }
    }

    let listArr = Object.entries(listObj);
    let sortedListArr = listArr.sort((a, b) => {
        let lengthA = Object.keys(a[1].students).length;
        let lengthB = Object.keys(b[1].students).length;
        return lengthB - lengthA;
    });

    for (let curCourse of sortedListArr) {
        let [courseName, infos] = curCourse;
        let capacity = infos.capacity;
        let student = infos.students;
        let sortedStudents = student.sort((a, b) => b[0] - a[0]);
        console.log(`${courseName}: ${capacity - sortedStudents.length} places left`);
        sortedStudents.forEach(element => {
            console.log(`--- ${element[0]}: ${element[1]}, ${element[2]}`);
        });
    }

}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);
softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
]);

