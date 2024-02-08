function arrayManipulations(array) {

    let arr = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        let manipulation = command[0];
        let num1 = Number(command[1]);
        let num2 = Number(command[2]);

        switch (manipulation) {
            case 'Add':
                arr.push(num1);
                break;
            case 'Remove':
                arr = arr.filter(a => a !== num1);
                break;
            case 'RemoveAt':
                arr.splice(num1, 1);
                break;
            case 'Insert':
                arr.splice(num2, 0, num1)
                break;
        }
    }

    console.log(arr.join(' '));

}

arrayManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
]);
arrayManipulations([
    "6 12 2 65 6 42",
    "Add 8",
    "Remove 12",
    "RemoveAt 3",
    "Insert 6 2",
]);
