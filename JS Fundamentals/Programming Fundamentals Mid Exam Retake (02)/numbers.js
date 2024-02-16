function numbers(input) {

    let arr = input.split(' ').map(Number);
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    
    arr = arr.sort((a, b) => b - a);
    
    let newArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (newArr.length < 5) {
            if (arr[j] > average) {
                newArr.push(arr[j]);
            }
        }
    }
    
    if (newArr.length !== 0) {
        console.log(newArr.join(' '));
    } else {
        console.log('No');
    }
    
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');
