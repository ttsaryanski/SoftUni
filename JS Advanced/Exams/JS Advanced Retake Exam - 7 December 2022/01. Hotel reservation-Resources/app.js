window.addEventListener('load', solve);

function solve() {

    let infoRef = document.getElementById('info-reservations');
    let infoUl = infoRef.querySelectorAll('ul')[0];

    let confRef = document.getElementById('confirm-reservations');
    let confUl = confRef.querySelectorAll('ul')[0];

    let compRef = document.getElementById('complete-reservation');

    let fNameRef = document.getElementById('first-name');
    let fName;
    let lNameRef = document.getElementById('last-name');
    let lName;
    let inRef = document.getElementById('date-in');
    let inCh;
    let outRef = document.getElementById('date-out');
    let outCh;
    let qtyRef = document.getElementById('people-count');
    let qty;
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    function next(event) {
        event.preventDefault();

        if (fNameRef.value === '' || lNameRef.value === '' || inRef.value === '' || outRef.value === '' || qtyRef.value === '') {
            return;
        }

        let infoLi = document.createElement('li');
        infoLi.classList.add('info-list');
        let infoArticle = document.createElement('article');
        let nameH3 = document.createElement('h3');
        nameH3.textContent = `Name: ${fNameRef.value} ${lNameRef.value}`;
        fName = fNameRef.value;
        lName = lNameRef.value;
        let inP = document.createElement('p');
        inP.textContent = `From date: ${inRef.value}`;
        inCh = inRef.value;
        let outP = document.createElement('p');
        outP.textContent = `To date: ${outRef.value}`;
        outCh = outRef.value;
        let qtyP = document.createElement('p');
        qtyP.textContent = `For ${qtyRef.value} people`;
        qty = qtyRef.value;

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        let contBtn = document.createElement('button');
        contBtn.classList.add('continue-btn');
        contBtn.textContent = 'Continue';
        contBtn.addEventListener('click', cont);

        infoArticle.appendChild(nameH3);
        infoArticle.appendChild(inP);
        infoArticle.appendChild(outP);
        infoArticle.appendChild(qtyP);
        infoLi.appendChild(infoArticle);
        infoLi.appendChild(editBtn);
        infoLi.appendChild(contBtn);
        infoUl.appendChild(infoLi);

        fNameRef.value = '';
        lNameRef.value = '';
        inRef.value = '';
        outRef.value = '';
        qtyRef.value = '';
        nextBtn.disabled = true;
    }

    function edit(event) {
        let infoLi = event.currentTarget.parentElement;

        fNameRef.value = fName;
        lNameRef.value = lName;
        inRef.value = inCh;
        outRef.value = outCh;
        qtyRef.value = qty;
        nextBtn.disabled = false;
        infoLi.remove();
    }

    function cont(event) {
        let infoLi = event.currentTarget.parentElement;
        confUl.appendChild(infoLi);
        let confLi = confUl.getElementsByTagName('li')[0];

        let btn1 = confLi.querySelectorAll('button')[0];
        let btn2 = confLi.querySelectorAll('button')[1];
        confLi.removeChild(btn1);
        confLi.removeChild(btn2);

        let confBtn = document.createElement('button');
        confBtn.classList.add('confirm-btn');
        confBtn.textContent = 'Confirm';
        confBtn.addEventListener('click', conf);

        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancel);

        confLi.appendChild(confBtn);
        confLi.appendChild(cancelBtn);
    }

    function conf(event) {
        let confLi = event.currentTarget.parentElement;
        confLi.remove();
        nextBtn.disabled = false;

        let h1 = document.getElementById('verification');
        h1.classList.add('reservation-confirmed');
        h1.textContent = 'Confirmed.';
    }

    function cancel(event) {
        let confLi = event.currentTarget.parentElement;
        confLi.remove();
        nextBtn.disabled = false;

        let h1 = document.getElementById('verification');
        h1.classList.add('reservation-cancelled');
        h1.textContent = 'Cancelled.';
    }

}



    
    
