function replaceRepeatingChar(str) {

    let arr = str.split('');
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result += arr[i];
        }
    }
    console.log(result);
    
}

replaceRepeatingChar('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChar('qqqwerqwecccwd');
