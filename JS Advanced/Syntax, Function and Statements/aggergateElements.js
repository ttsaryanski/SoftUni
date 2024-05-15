function aggergateElements(array) {

    let sum = 0;
    for (let num of array) {
        sum += num;
    }

    let inverseSum = 0;
    for (let num of array) {
        inverseSum += 1 / num;
    }

    let newArr = array.map(el => el = String(el));
    let str = '';
    for (let curStr of newArr) {
        str += curStr; 
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(str);
    
}

aggergateElements([1, 2, 3]);
aggergateElements([2, 4, 8, 16]);
