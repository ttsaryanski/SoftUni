function oddOccurrences(input) {

    let arr = input.split(' ').map(str => str.toLowerCase());
    
    let arrObjMap = new Map();
    for (let curWord of arr) {
        if (arrObjMap.has(curWord)) {
            arrObjMap.set(curWord, arrObjMap.get(curWord) + 1);
        } else {
            arrObjMap.set(curWord, 1);
        }
    }
    let objArr = Array.from(arrObjMap);
    let result = '';
    for (let [work, count] of objArr) {
        if (count % 2 !== 0) {
            result += `${work} `;
        }
    }
    console.log(result);
    
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
