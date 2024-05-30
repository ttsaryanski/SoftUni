function solve() {

    let textRef = document.getElementById('text');
    let conventionRef = document.getElementById('naming-convention');
    let resultRef = document.getElementById('result');

    let str = textRef.value;
    let conventionType = conventionRef.value;

    let result = '';
    if (conventionType === 'Camel Case') {
        strArr = str.split(' ');
        strArr[0] = strArr[0].toLowerCase();
        result += strArr[0];

        for (let i = 1; i < strArr.length; i++) {
            let firstChar = strArr[i][0];
            firstChar = firstChar.toUpperCase();
            let tmpWord = strArr[i].slice(1);
            tmpWord = tmpWord.toLowerCase();
            let newWord = firstChar + tmpWord;
            result += newWord;
        }

    } else if (conventionType === 'Pascal Case') {
        strArr = str.split(' ');

        for (let i = 0; i < strArr.length; i++) {
            let firstChar = strArr[i][0];
            firstChar = firstChar.toUpperCase();
            let tmpWord = strArr[i].slice(1);
            tmpWord = tmpWord.toLowerCase();
            let newWord = firstChar + tmpWord;
            result += newWord;
        }

    } else {
        result = 'Error!'
    }
    
    resultRef.textContent = result;

}