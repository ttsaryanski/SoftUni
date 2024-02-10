function arrayManipulator(arr1, arr2) {

    for (let tokens of arr2) {
        let token = tokens.split(' ');
        let command = token[0];
        
        if (command === 'add') {
            let num1 = Number(token[1]);
            let num2 = Number(token[2]);
            arr1.splice(num1, 0, num2);
        } else if (command === 'addMany') {
            let idx = Number(token[1]);
            for (let i = token.length - 1; i >= 2; i--) {
                arr1.splice(idx, 0, Number(token[i]));
            }
        } else if (command === 'contains') {
            let num = Number(token[1]);
            if (arr1.includes(num)) {
                let idx = arr1.indexOf(num);
                console.log(idx);
            } else {
                console.log('-1');
            }
        } else if (command === 'remove') {
            let idx = Number(token[1]);
            arr1.splice(idx, 1);
        } else if (command === 'shift') {
            let position = Number(token[1]);
            while (position > 0) {
                let num = arr1.shift();
                arr1.push(num);
                position--;
            }
        } else if (command === 'sumPairs') {
            let newArr = [];
            for (let i = 0; i < arr1.length; i += 2) {
                if (i < arr1.length - 1) {
                    let sum = arr1[i] + arr1[i + 1];
                    newArr.push(sum);
                } else {
                    let sum = arr1[i];
                    newArr.push(sum);
                }
            }
            arr1 = newArr;
        } else if (command === 'print') {
            console.log(`[ ${arr1.join(', ')} ]`);
        }
    }
    
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3",  "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
