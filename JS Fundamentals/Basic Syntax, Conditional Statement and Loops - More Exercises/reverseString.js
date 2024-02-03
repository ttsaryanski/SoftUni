function reverseString(params) {

    let strParams = String(params);
    let target = '';


    for (let curLetter = strParams.length - 1; curLetter >= 0; curLetter--) {
        target += strParams[curLetter];
    }
    console.log(`${target}`);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString(1234);
