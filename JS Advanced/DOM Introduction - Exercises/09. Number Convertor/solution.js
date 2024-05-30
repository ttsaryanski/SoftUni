function solve() {

    let inputRef = document.getElementById('input');
    let resultRef = document.getElementById('result');
    let selectMenuToRef = document.getElementById('selectMenuTo');
    let buttonRef = document.getElementsByTagName('button')[0];

    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    selectMenuToRef.append(binaryOption);
    selectMenuToRef.append(hexadecimalOption);

    buttonRef.addEventListener('click', calculate);

    function calculate() {
        if (selectMenuToRef.value === 'binary') {
            resultRef.value = Number(inputRef.value).toString(2);
        } else if (selectMenuToRef.value === 'hexadecimal') {
            resultRef.value = Number(inputRef.value).toString(16).toUpperCase();
        }
    }


}