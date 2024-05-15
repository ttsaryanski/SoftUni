function sameNumbers(params) {

    let arr = String(params).split('');
    let firstValue = arr[0];
    let isSame = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== firstValue) {
            isSame = false;
            break;
        }
    }

    let arrFornumbers = arr.map(Number);
    let sumForNumbers = arrFornumbers.reduce((a, b) => a + b);

    console.log(isSame);
    console.log(sumForNumbers);
    
}

sameNumbers(2222222);
sameNumbers(1234);