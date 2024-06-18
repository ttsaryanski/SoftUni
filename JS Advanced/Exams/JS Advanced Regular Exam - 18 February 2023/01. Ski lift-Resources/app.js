window.addEventListener('load', solve);

function solve() {

    let prevUl = document.querySelectorAll('ul')[0];
    let confUl = document.querySelectorAll('ul')[1];

    let fNameR = document.getElementById('first-name');
    let fName;
    let lNameR = document.getElementById('last-name');
    let lName;
    let numR = document.getElementById('people-count');
    let num;
    let dateR = document.getElementById('from-date');
    let date;
    let daysR = document.getElementById('days-count');
    let days;

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    function next(event) {
        event.preventDefault();

        if (fNameR.value === '' || lNameR.value === '' || numR.value === '' || dateR.value === '' || daysR.value === '') {
            return;
        }

        let prevLi = document.createElement('li');
        prevLi.classList.add('ticket');
        let prevArticle = document.createElement('article');
        let nameH3 = document.createElement('h3');
        nameH3.textContent = `Name: ${fNameR.value} ${lNameR.value}`;
        fName = fNameR.value;
        lName = lNameR.value;
        let dateP = document.createElement('p');
        dateP.textContent = `From date: ${dateR.value}`;
        date = dateR.value;
        let daysP = document.createElement('p')
        daysP.textContent = `For ${daysR.value} days`;
        days = daysR.value;
        let numP = document.createElement('p');
        numP.textContent = `For ${numR.value} people`;
        num = numR.value;

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);
        let contBtn = document.createElement('button');
        contBtn.classList.add('continue-btn');
        contBtn.textContent = 'Continue';
        contBtn.addEventListener('click', cont);
        
        prevArticle.appendChild(nameH3);
        prevArticle.appendChild(dateP);
        prevArticle.appendChild(daysP);
        prevArticle.appendChild(numP);
        prevLi.appendChild(prevArticle);
        prevLi.appendChild(editBtn);
        prevLi.appendChild(contBtn);
        prevUl.appendChild(prevLi);

        fNameR.value = '';
        lNameR.value = '';
        numR.value = '';
        dateR.value = '';
        daysR.value = '';
        nextBtn.disabled = true;
    }

    function edit(event) {
        let prevLi = event.currentTarget.parentElement;
        prevLi.remove();

        fNameR.value = fName;
        lNameR.value = lName;
        numR.value = num;
        dateR.value = date;
        daysR.value = days;
        nextBtn.disabled = false;
    }

    function cont(event) {
        let prevLi = event.currentTarget.parentElement;
        confUl.appendChild(prevLi);

        let confLi = confUl.querySelector('li')
        let editBtn = confUl.querySelectorAll('button')[0];
        let contBtn = confUl.querySelectorAll('button')[1];

        confLi.removeChild(editBtn);
        confLi.removeChild(contBtn);

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
        let body = document.getElementById('body');
        let main = document.getElementById('main');
        main.remove();

        let h1 = document.createElement('h1');
        h1.id = 'thank-you';
        h1.textContent = 'Thank you, have a nice day!';
        let backBtn = document.createElement('button');
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', back);

        body.appendChild(h1);
        body.appendChild(backBtn);

    }

    function cancel(event) {
        let confLi = event.currentTarget.parentElement;
        confLi.remove();
        nextBtn.disabled = false;
    }

    function back(event) {
        window.location.reload();
    }
   
}


    
    
