function jansNotation(array) {

    let newArr = [];
    let result = 0;
    for (let iterator of array) {
        if (typeof iterator === 'number') {
            newArr.push(iterator);
        } else {
            if (iterator === '+') {
                if (newArr.length < 2) {
                    console.log('Error: not enough operands!');
                    return;
                } else {
                    let result = 0;
                    result = newArr[newArr.length - 2] + newArr[newArr.length - 1];
                    newArr.splice(newArr.length - 2, 2, result);
                }
            } else if (iterator === '-') {
                if (newArr.length < 2) {
                    console.log('Error: not enough operands!');
                    return;
                } else {
                    result = newArr[newArr.length - 2] - newArr[newArr.length - 1];
                    newArr.splice(newArr.length - 2, 2, result);
                }
            } else if (iterator === '*') {
                if (newArr.length < 2) {
                    console.log('Error: not enough operands!');
                    return;
                } else {
                    result = newArr[newArr.length - 2] * newArr[newArr.length - 1];
                    newArr.splice(newArr.length - 2, 2, result);
                }
            } else if (iterator === '/') {
                if (newArr.length < 2) {
                    console.log('Error: not enough operands!');
                    return;
                } else {
                    result = newArr[newArr.length - 2] / newArr[newArr.length - 1];
                    newArr.splice(newArr.length - 2, 2, result);
                }
            }
        }
    }
    if (newArr.length > 1) {
        console.log('Error: too many operands!');
        return;
    }
    if (newArr.length === 1) {
        console.log(newArr.join(''));
    }
    
}

jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([15, "/"]);
