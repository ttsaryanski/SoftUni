function negativePositiveNumbers(arr) {

    let result = [];

    for (const el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    console.log(result.join('\n'));
    
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);