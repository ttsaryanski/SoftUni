window.addEventListener('load', solve);

function solve() {

    let nameRef = document.getElementById('name');
    let name;
    let mailRef = document.getElementById('email');
    let mail;
    let numRef = document.getElementById('contact-number');
    let num;
    let typeRef = document.getElementById('class-type');
    let type;
    let timeRef = document.getElementById('class-time');
    let time;
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    let prevUl = document.querySelectorAll('ul')[0];
    let confirmUl = document.querySelectorAll('ul')[1];

    let body = document.getElementById('body');
    let main = document.getElementById('main');

    function next(event) {
        event.preventDefault();

        if (nameRef.value === '' || mailRef.value === '' || numRef.value === '' || typeRef.value === '' || timeRef.value === '') {
            return;
        }

        let prevLi = document.createElement('li');
        prevLi.classList.add('info-item');
        let prevArticle = document.createElement('article');
        prevArticle.classList.add('personal-info');
        let nameP = document.createElement('p');
        nameP.textContent = nameRef.value;
        name = nameRef.value;
        let mailP = document.createElement('p');
        mailP.textContent = mailRef.value;
        mail = mailRef.value;
        let numP = document.createElement('p');
        numP.textContent = numRef.value;
        num = numRef.value;
        let typeP = document.createElement('p');
        typeP.textContent = typeRef.value;
        type = typeRef.value;
        let timeP = document.createElement('p');
        timeP.textContent = timeRef.value;
        time = timeRef.value;

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        let contBtn = document.createElement('button');
        contBtn.classList.add('continue-btn');
        contBtn.textContent = 'Continue';
        contBtn.addEventListener('click', cont);

        prevArticle.appendChild(nameP);
        prevArticle.appendChild(mailP);
        prevArticle.appendChild(numP);
        prevArticle.appendChild(typeP);
        prevArticle.appendChild(timeP);
        prevLi.appendChild(prevArticle);
        prevLi.appendChild(editBtn);
        prevLi.appendChild(contBtn);
        prevUl.appendChild(prevLi);

        nameRef.value = '';
        mailRef.value = '';
        numRef.value = '';
        typeRef.value = '';
        timeRef.value = '';
        nextBtn.disabled = true;

    }

    function edit(event) {
        let prevLi = event.currentTarget.parentElement;

        nameRef.value = name;
        mailRef.value = mail;
        numRef.value = num;
        typeRef.value = type;
        timeRef.value = time;
        nextBtn.disabled = false;
        prevLi.remove();
    }

    function cont(event) {
        let prevLi = event.currentTarget.parentElement;
        confirmUl.appendChild(prevLi);
        let confirmLi = confirmUl.querySelectorAll('li')[0];
        confirmLi.setAttribute('class', 'continue-info');

        let editBtn = confirmUl.querySelectorAll('button')[0];
        let contBtn = confirmUl.querySelectorAll('button')[1];

        confirmLi.removeChild(editBtn);
        confirmLi.removeChild(contBtn);

        let cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancel);
        let confirmBtn = document.createElement('button');
        confirmBtn.setAttribute('class', 'confirm-btn');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', confirm);

        confirmLi.appendChild(cancelBtn);
        confirmLi.appendChild(confirmBtn);
    }

    function cancel(event) {
        let confirmLi = event.currentTarget.parentElement;
        confirmLi.remove();
        nextBtn.disabled = false;
    }

    function confirm(event) {
        main.remove();

        let h1 = document.createElement('h1');
        h1.setAttribute('id', 'thank-you');
        h1.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

        let doneBtn = document.createElement('button');
        doneBtn.setAttribute('id', 'done-btn');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', done);

        body.appendChild(h1);
        body.appendChild(doneBtn);
    }

    function done(event) {
        window.location.reload();
    }
}




