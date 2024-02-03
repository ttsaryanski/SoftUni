function charactersInRange(par1, par2) {

    let finalCode = parToAscii(par1, par2);

    let allCodeArr = finalCode.split(' ');
    allCodeArr.pop();
    
    let finalResult = asciiToPar(allCodeArr);

    console.log(finalResult);

    function parToAscii(a, b) {
        let num1 = a.charCodeAt();
        let num2 = b.charCodeAt();

        let firstCode = Math.min(num1, num2);
        let lastCode = Math.max(num1, num2);

        let allCode = '';
        for (let curCode = firstCode + 1; curCode <= lastCode - 1; curCode++) {
            allCode += curCode + ' ';
        }
        return allCode;
    }
    
    function asciiToPar(arr) {
        let finalPar = '';
        for (let i = 0; i < allCodeArr.length; i++) {
            let curPar = String.fromCharCode(allCodeArr[i]);
            finalPar += curPar + ' ';
        }
        return finalPar;
    }

}

charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
