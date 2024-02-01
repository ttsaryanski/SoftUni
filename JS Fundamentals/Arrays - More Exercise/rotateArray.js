function rotateArray(array) {

    let rotationCount = array.pop();

    for (let i = 1; i <= rotationCount; i++) {
        let push = array.pop();
        array.unshift(push);
    }

    console.log(array.join(' '));

}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
