function rotateArray(array, rotateCount) {

    while (rotateCount !== 0) {
        let tmp = array.pop();
        array.unshift(tmp);
        rotateCount--;
    }

    console.log(array.join(' '));
    
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
