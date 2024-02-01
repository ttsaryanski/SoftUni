function printNthElement(array) {

    let step = Number(array.pop());
    let result = [];

    for (let i = 0; i < array.length; i += step) {
        let element = array[i];
        result.push(element);
    }

    console.log(result.join(' '));

}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);
