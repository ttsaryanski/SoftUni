function validityChecker(x1, y1, x2, y2) {

    function validator(x1, y1, x2, y2) {
        return Number.isInteger(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
    }

    isValid1 = validator(x1, y1, 0, 0) ? 'valid' : 'invalid';
    isValid2 = validator(x2, y2, 0, 0) ? 'valid' : 'invalid';
    isValid3 = validator(x1, y1, x2, y2) ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid3}`);
    
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);