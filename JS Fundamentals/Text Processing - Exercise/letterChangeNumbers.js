function letterChangeNumbers(input) {

    let sum = 0;
    let elements = input.split('');
    let modifyElements = elements[0];
    let letterPositionUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let letterPositionLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 1; i < elements.length; i++) {
        if (elements[i] === elements[i - 1] && elements[i] === ' ') {
            continue;
        } else {
            modifyElements += elements[i];
        }
    }
    modifyElements = modifyElements.split(' ');
    for (let curElement of modifyElements) {
        let leftSymbol = curElement.slice(0, 1);
        let rightSymbol = curElement.slice(curElement.length - 1);
        let num = Number(curElement.slice(1, curElement.length - 1));
        
        if (leftSymbol === leftSymbol.toUpperCase()) {
            for (let i = 0; i < letterPositionUpperCase.length; i++) {
                if (leftSymbol === letterPositionUpperCase[i]) {
                    num = num / (i + 1);
                    break;
                }
            }
        } else {
            for (let j = 0; j < letterPositionLowerCase.length; j++) {
                if (leftSymbol === letterPositionLowerCase[j]) {
                    num = num * (j + 1);
                    break;
                }
            }
        }

        if (rightSymbol === rightSymbol.toUpperCase()) {
            for (let m = 0; m < letterPositionUpperCase.length; m++) {
                if (rightSymbol === letterPositionUpperCase[m]) {
                    num = num - (m + 1);
                    break;
                }
            }
        } else {
            for (let n = 0; n < letterPositionLowerCase.length; n++) {
                if (rightSymbol === letterPositionLowerCase[n]) {
                    num = num + (n + 1);
                    break;
                }
            }
        }
        sum += num;
    }
    console.log(sum.toFixed(2));
    
}

letterChangeNumbers('A12b s17G');
letterChangeNumbers('P34562Z q2576f   H456z');
letterChangeNumbers('a1A');
