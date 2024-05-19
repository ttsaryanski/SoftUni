function addAndRemoveElements(array) {

    let result = [];
    let startNum = 1;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === 'add') {
            result.push(startNum);
            startNum++;
        } else if (command === 'remove') {
            result.pop();
            startNum++;
        }
    }
    if (result.length !== 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }

}

addAndRemoveElements([
    'add',
    'add',
    'add',
    'add'
]);
addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);
addAndRemoveElements([
    'remove',
    'remove',
    'remove'
]);
