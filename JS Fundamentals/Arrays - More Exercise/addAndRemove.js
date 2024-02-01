function addAndRemove(array) {

    let finalArr = [];
    let value = 0;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === 'add') {
            finalArr.push(value + 1);
            value++;
        } else if (command === 'remove') {
            finalArr.pop();
            value++;
        }
    }
    if (finalArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(finalArr.join(' '));
    }


}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
