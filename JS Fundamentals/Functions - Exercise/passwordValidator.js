function passwordValidator(pass) {

    let isValidLength = checkCount(pass);
    let isValidDigLett = checkOnlyDigitsLetters(pass);
    let isOver2Digit = checkOver2Digits(pass);
    if (isValidLength === true && isValidDigLett === true && isOver2Digit === true) {
        console.log('Password is valid');
    }
    
    function checkCount(password) {
        curLength = password.length;
        if (curLength < 6 || curLength > 10) {
            console.log('Password must be between 6 and 10 characters');
        } else {
            return true;
        }
    }

    function checkOnlyDigitsLetters(password) {
        let pattern = /^[A-Za-z0-9]+$/;
        let isValid = pattern.test(password);
        if (isValid === false) {
            console.log('Password must consist only of letters and digits');
        } else {
            return true;
        }
    }

    function checkOver2Digits(password) {
        let pattern = /[0-9]{2,}/;
        let isValid = pattern.test(password);
        if (isValid === false) {
            console.log('Password must have at least 2 digits');
        } else {
            return true;
        } 
    }
    
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
