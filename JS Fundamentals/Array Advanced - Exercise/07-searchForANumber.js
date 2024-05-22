function searchForANumber(arr1, arr2) {

    let newArr = [];

    for (let i = 0; i < arr2[0]; i++) {
        let num = arr1[i];
        newArr.push(num);
    }

    newArr.splice(0, arr2[1])

    let count = 0;
    for (let j = 0; j < newArr.length; j++) {
        let num = newArr[j];
        if (num === arr2[2]) {
            count++;
        }
    }
    
    console.log(`Number ${arr2[2]} occurs ${count} times.`);
    
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
