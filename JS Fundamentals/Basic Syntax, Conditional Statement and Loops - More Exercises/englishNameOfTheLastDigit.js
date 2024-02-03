function englishNameOfTheLastdigit(num) {

    let strNum = String(num);
    let target = Number(strNum[strNum.length - 1]);

    if (target === 1) {
        console.log('one');
    } else if (target === 2) {
        console.log('two');
    } else if (target === 3) {
        console.log('three');
    } else if (target === 4) {
        console.log('four');
    } else if (target === 5) {
        console.log('five');
    } else if (target === 6) {
        console.log('six');
    } else if (target === 7) {
        console.log('seven');
    } else if (target === 8) {
        console.log('eight');
    } else if (target === 9) {
        console.log('nine');
    } else if (target === 0) {
        console.log('zero');
    }
    
}

englishNameOfTheLastdigit(512);
englishNameOfTheLastdigit(1);
englishNameOfTheLastdigit(1643);
