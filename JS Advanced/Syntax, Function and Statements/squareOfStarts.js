function squareOfStarts(params = 5) {

    let result = '* ';

    for (let row = 1; row <= params; row++) {
        console.log(result.repeat(params).trim());
    }
    
}

squareOfStarts(1);
squareOfStarts(2);
squareOfStarts(5);
squareOfStarts(7);
squareOfStarts();