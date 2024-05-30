function addItem() {

    let addBoxRef = document.getElementById('newItemText');
    let ulElements = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = addBoxRef.value;

    ulElements.append(liElement);
    addBoxRef.value = '';

    addBoxRef.focus();
    
}