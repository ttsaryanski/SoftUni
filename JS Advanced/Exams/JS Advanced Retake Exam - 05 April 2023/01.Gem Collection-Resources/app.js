window.addEventListener("load", solve);


function solve() {

    let nameRef = document.getElementById('gem-name');
    let name;
    let colorRef = document.getElementById('color');
    let color;
    let caratsRef = document.getElementById('carats');
    let carats;
    let priceRef = document.getElementById('price');
    let price;
    let typeRef = document.getElementById('type');
    let type;
    let addButtonRef = document.getElementById('add-btn');
    addButtonRef.addEventListener('click', addStone);

    let previewUlRef = document.getElementById('preview-list');
    let collectionUlRef = document.getElementById('collection');

    function addStone(event) {
        event.preventDefault();

        if (nameRef.value === '' || colorRef.value === '' || caratsRef.value === '' || priceRef.value === '' || typeRef.value === '') {
            return;
        }
        
        let previewLi = document.createElement('li');
        previewLi.classList.add('gem-info');
        let previewArticle = document.createElement('article');

        let previewH4 = document.createElement('h4');
        previewH4.textContent = nameRef.value;
        name = nameRef.value;
        let colorP = document.createElement('p');
        colorP.textContent = `Color: ${colorRef.value}`;
        color = colorRef.value;
        let caratsP = document.createElement('p');
        caratsP.textContent = `Carats: ${caratsRef.value}`;
        carats = caratsRef.value;
        let priceP = document.createElement('p');
        priceP.textContent = `Price: ${priceRef.value}$`;
        price = priceRef.value;
        let typeP = document.createElement('p');
        typeP.textContent = `Type: ${typeRef.value}`;
        type = typeRef.value;

        previewArticle.appendChild(previewH4);
        previewArticle.appendChild(colorP);
        previewArticle.appendChild(caratsP);
        previewArticle.appendChild(priceP);
        previewArticle.appendChild(typeP);

        let saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save to Collection';
        saveButton.addEventListener('click', save);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit Information';
        editButton.addEventListener('click', edit);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', cancel);

        previewLi.appendChild(previewArticle);
        previewLi.appendChild(saveButton);
        previewLi.appendChild(editButton);
        previewLi.appendChild(cancelButton);

        previewUlRef.appendChild(previewLi);

        nameRef.value = '';
        colorRef.value = '';
        caratsRef.value = '';
        priceRef.value = '';
        typeRef.value = '';
        addButtonRef.disabled = true;

    }

    function save(event) {
        let previewLi = event.currentTarget.parentElement;
        let collectionLi = document.createElement('li');
        let itemP = document.createElement('p');
        itemP.classList.add('collection-item');
        itemP.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

        collectionLi.appendChild(itemP);
        collectionUlRef.appendChild(collectionLi);
        addButtonRef.disabled = false;

        previewUlRef.removeChild(previewLi);
    }

    function edit(event) {
        let previewLi = event.currentTarget.parentElement;
        nameRef.value = name;
        colorRef.value = color;
        caratsRef.value = carats;
        priceRef.value = price;
        typeRef.value = type;
        addButtonRef.disabled = false;

        previewUlRef.removeChild(previewLi);
    }

    function cancel(event) {
        let previewLi = event.currentTarget.parentElement;
        previewUlRef.removeChild(previewLi);
        addButtonRef.disabled = false;
    }


}
