function solve() {

    let generateButton = document.querySelectorAll('button')[0];
    let inputRef = document.querySelectorAll('textarea')[0];

    let bayButton = document.querySelectorAll('button')[1];
    let outputRef = document.querySelectorAll('textarea')[1];

    let table = document.querySelector('tbody');
    let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    
    generateButton.addEventListener('click', order);
    function order() {
        let products = inputRef.value;
        products = JSON.parse(products);

        for (const product of products) {

            let productRow = document.createElement('tr');
    
            let tdImage = document.createElement('td');
            let image = document.createElement('img');
            image.src = product.img;
            tdImage.appendChild(image);
            productRow.appendChild(tdImage);

            let tdName = document.createElement('td');
            let name = document.createElement('p');
            name.textContent = product.name;
            tdName.appendChild(name);
            productRow.appendChild(tdName);

            let tdPrice = document.createElement('td');
            let price = document.createElement('p');
            price.textContent = product.price;
            tdPrice.appendChild(price);
            productRow.appendChild(tdPrice);

            let tdDecFactor = document.createElement('td');
            let decFactor = document.createElement('p');
            decFactor.textContent = product.decFactor;
            tdDecFactor.appendChild(decFactor);
            productRow.appendChild(tdDecFactor);

            let tdMark = document.createElement('td');
            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            tdMark.appendChild(checkBox);
            productRow.appendChild(tdMark);
    
            table.appendChild(productRow);
            
        }
        
        allCheckboxes.forEach(el => {
            el.disabled = false;
        });

    }

    bayButton.addEventListener('click', buyng);
    function buyng() {
        let buyngList = Array.from(document.querySelectorAll('input[type=checkbox]'))
                        .filter(el => el.checked === true)
                        .map(el => el.parentElement.parentElement);
        let names = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        for (const product of buyngList) {
            let name = product.querySelectorAll('td')[1].textContent.trim();
            let price = Number(product.querySelectorAll('td')[2].textContent.trim());
            let decFactor = Number(product.querySelectorAll('td')[3].textContent.trim());
            names.push(name);
            totalPrice += price;
            totalDecFactor += decFactor;
        }
        let result = [];
        result.push(`Bought furniture: ${names.join(', ')}`);
        result.push(`Total price: ${totalPrice.toFixed(2)}`);
        result.push(`Average decoration factor: ${totalDecFactor / names.length}`);

        outputRef.value = result.join('\n');

    }



}