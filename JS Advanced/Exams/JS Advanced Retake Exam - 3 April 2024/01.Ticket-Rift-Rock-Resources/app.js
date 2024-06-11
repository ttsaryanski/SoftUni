window.addEventListener("load", solve);

function solve() {

    let ticketsCountRef = document.getElementById('num-tickets');
    let count;

    let preferenceRef = document.getElementById('seating-preference');
    let pref;

    let nameRef = document.getElementById('full-name');
    let name;

    let emailRef = document.getElementById('email');
    let email;

    let phoneRef = document.getElementById('phone-number');
    let phone;

    let purchaseButton = document.getElementById('purchase-btn');
    purchaseButton.addEventListener('click', createList);

    let ticketPreviewRef = document.getElementById('ticket-preview');
    let tickedPurchaseRef = document.getElementById('ticket-purchase')

    function createList(event) {
        event.preventDefault();

        if (ticketsCountRef.value === '' || nameRef.value === '' || emailRef.value === '' || phoneRef.value === '' || preferenceRef.value === 'seating-preference') {
            return;
        }
        
        let previewLi = document.createElement('li');
        previewLi.classList.add('ticket-purchase');

        let previewArticle = document.createElement('article');
        let countP = document.createElement('p');
        count = ticketsCountRef.value;
        countP.textContent = `Count: ${ticketsCountRef.value}`;
        let prefP = document.createElement('p');
        pref = preferenceRef.value;
        prefP.textContent = `Preference: ${preferenceRef.value}`;
        let nameP = document.createElement('p');
        name = nameRef.value;
        nameP.textContent = `To: ${nameRef.value}`;
        let emailP = document.createElement('p');
        email = emailRef.value;
        emailP.textContent = `Email: ${emailRef.value}`;
        let phoneP = document.createElement('p');
        phone = phoneRef.value;
        phoneP.textContent = `Phone Number: ${phoneRef.value}`;

        previewArticle.appendChild(countP);
        previewArticle.appendChild(prefP);
        previewArticle.appendChild(nameP);
        previewArticle.appendChild(emailP);
        previewArticle.appendChild(phoneP);

        let previewDiv = document.createElement('div');
        previewDiv.classList.add('btn-container');

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);
        let nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', next);

        previewDiv.appendChild(editButton);
        previewDiv.appendChild(nextButton);

        previewLi.appendChild(previewArticle);
        previewLi.appendChild(previewDiv);

        ticketPreviewRef.appendChild(previewLi);

        ticketsCountRef.value = '';
        preferenceRef.value = '';
        nameRef.value = '';
        emailRef.value = '';
        phoneRef.value = '';
        purchaseButton.disabled = true;
        
    }

    function edit(event) {
        ticketsCountRef.value = count;
        preferenceRef.value = pref;
        nameRef.value = name;
        emailRef.value = email;
        phoneRef.value = phone;
        purchaseButton.disabled = false;
        ticketPreviewRef.remove();
    }

    function next(event) {
        let previewUl = document.getElementById('ticket-preview');
        let previewAllP = previewUl.querySelectorAll('p');

        let purchaseLi = document.createElement('li');
        purchaseLi.classList.add('ticket-purchase');

        let previewArticle = document.createElement('article');
        let countP = document.createElement('p');
        countP.textContent = previewAllP[0].textContent;
        let prefP = document.createElement('p');
        prefP.textContent = previewAllP[1].textContent;
        let nameP = document.createElement('p');
        nameP.textContent = previewAllP[2].textContent;
        let emailP = document.createElement('p');
        emailP.textContent = previewAllP[3].textContent;
        let phoneP = document.createElement('p');
        phoneP.textContent = previewAllP[4].textContent;

        let buyButton = document.createElement('button');
        buyButton.classList.add('buy-btn');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', buy);

        previewArticle.appendChild(countP);
        previewArticle.appendChild(prefP);
        previewArticle.appendChild(nameP);
        previewArticle.appendChild(emailP);
        previewArticle.appendChild(phoneP);
        previewArticle.appendChild(buyButton);

        purchaseLi.appendChild(previewArticle);

        tickedPurchaseRef.appendChild(purchaseLi);
        ticketPreviewRef.remove();
    }

    function buy(event) {
        let buyDiv = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement;
        let h2Element = document.createElement('h2');
        h2Element.textContent = 'Thank you for your purchase!';
        let backButton = document.createElement('button');
        backButton.classList.add('back-btn');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', back);

        buyDiv.appendChild(h2Element);
        buyDiv.appendChild(backButton);
        tickedPurchaseRef.remove();
    }

    function back(event) {
        const buyDiv = document.querySelector('.bottom-content');
        let h2El = buyDiv.querySelector('h2');
        let button = buyDiv.querySelector('button');

        buyDiv.removeChild(h2El);
        buyDiv.removeChild(button);
        
        purchaseButton.disabled = false;
        
    }


}
