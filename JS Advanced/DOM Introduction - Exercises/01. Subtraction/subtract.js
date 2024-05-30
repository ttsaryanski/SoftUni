function subtract() {

    let result = 0;
    let firstNumRef = document.getElementById('firstNumber');
    let secNumRef = document.getElementById('secondNumber');
    let resultRef = document.getElementById('result');

    let firstNum = Number(firstNumRef.value);
    let secNum = Number(secNumRef.value);
    result = firstNum - secNum;
    
    resultRef.textContent = result;

    
}