function addItem() {

    let inputBoxRef = document.getElementById('newItemText');
    let ulElements = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = inputBoxRef.value;

    const delButton = document.createElement('a');
    delButton.href = '#';
    delButton.textContent = '[Delete]';
    delButton.addEventListener('click', (event) => {
        liElement.remove();
    });

    liElement.append(delButton);
    ulElements.append(liElement);

    inputBoxRef.value = '';
    inputBoxRef.focus();
    
}