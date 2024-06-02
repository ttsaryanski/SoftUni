function addItem() {

    let menuRef = document.getElementById('menu');
    let textRef = document.getElementById('newItemText');
    let valueRef = document.getElementById('newItemValue');

    let inputText = textRef.value;
    let inputValue = valueRef.value;

    let option = document.createElement('option');
    option.textContent = inputText;
    option.value = inputValue;
    menuRef.appendChild(option);

    textRef.value = '';
    valueRef.value = '';

}