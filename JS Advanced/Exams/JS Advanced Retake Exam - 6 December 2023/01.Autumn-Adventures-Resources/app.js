window.addEventListener('load', solve);

function solve() {

    let timeRef = document.getElementById('time');
    let time;
    let dateRef = document.getElementById('date');
    let date;
    let placeRef = document.getElementById('place');
    let place;
    let nameRef = document.getElementById('event-name');
    let name;
    let mailRef = document.getElementById('email');
    let mail;
    let addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', add);

    let checkUl = document.getElementById('check-list');
    let upcomUl = document.getElementById('upcoming-list');
    let finishUl = document.getElementById('finished-list');

    let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', clear);

    function add(event) {
        event.preventDefault();

        let checkLi = document.createElement('li');
        checkLi.classList.add('event-content');
        let checkArticle = document.createElement('article');
        let timeP = document.createElement('p');
        timeP.textContent = `Begins: ${dateRef.value} at: ${timeRef.value}`;
        time = timeRef.value;
        date = dateRef.value;
        let placeP = document.createElement('p');
        placeP.textContent = `In: ${placeRef.value}`;
        place = placeRef.value;
        let nameP = document.createElement('p');
        nameP.textContent = `Event: ${nameRef.value}`;
        name = nameRef.value;
        let mailP = document.createElement('p');
        mailP.textContent = `Contact: ${mailRef.value}`;
        mail = mailRef.value;

        checkArticle.appendChild(timeP);
        checkArticle.appendChild(placeP);
        checkArticle.appendChild(nameP);
        checkArticle.appendChild(mailP);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        let contButton = document.createElement('button');
        contButton.classList.add('continue-btn');
        contButton.textContent = 'Continue';
        contButton.addEventListener('click', cont);

        checkLi.appendChild(checkArticle);
        checkLi.appendChild(editButton);
        checkLi.appendChild(contButton);
        checkUl.appendChild(checkLi);

        timeRef.value = '';
        dateRef.value = '';
        placeRef.value = '';
        nameRef.value = '';
        mailRef.value = '';
        addButton.disabled = true;
    }

    function edit(event) {
        let checkLi = event.currentTarget.parentElement;

        timeRef.value = time;
        dateRef.value = date;
        placeRef.value = place;
        nameRef.value = name;
        mailRef.value = mail;

        addButton.disabled = false;
        checkLi.remove();
    }

    function cont(event) {
        let checkLi = event.currentTarget.parentElement;

        let upcomLi = document.createElement('li');
        upcomLi.classList.add('event-content');
        let upcomArticle = document.createElement('article');
        let timeP = document.createElement('p');
        timeP.textContent = `Begins: ${date} at: ${time}`;
        let placeP = document.createElement('p');
        placeP.textContent = `In: ${place}`;
        let nameP = document.createElement('p');
        nameP.textContent = `Event: ${name}`;
        let mailP = document.createElement('p');
        mailP.textContent = `Contact: ${mail}`;

        upcomArticle.appendChild(timeP);
        upcomArticle.appendChild(placeP);
        upcomArticle.appendChild(nameP);
        upcomArticle.appendChild(mailP);

        let finishButton = document.createElement('button');
        finishButton.classList.add('finished-btn');
        finishButton.textContent = 'Move to Finished';
        finishButton.addEventListener('click', finish);

        upcomLi.appendChild(upcomArticle);
        upcomLi.appendChild(finishButton);
        upcomUl.appendChild(upcomLi);
        
        checkLi.remove();
        addButton.disabled = false;
    }

    function finish(event) {
        let upcomLi = event.currentTarget.parentElement;
        finishUl.appendChild(upcomLi);
        let button = finishUl.getElementsByTagName('button')[0];
        let finishLi = finishUl.getElementsByTagName('li')[0];
        finishLi.removeChild(button);
    }

    function clear(event) {
        let div = event.currentTarget.parentElement;
        let li = div.getElementsByTagName('li')[0]
        li.remove();
    }


}


    
    
