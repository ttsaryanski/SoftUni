window.addEventListener("load", solve);

function solve() {

    let nameRef = document.getElementById('snowman-name');
    let name;
    let heightRef = document.getElementById('snowman-height');
    let height;
    let locationRef = document.getElementById('location');
    let location;
    let creatorRef = document.getElementById('creator-name');
    let creator;
    let attributeRef = document.getElementById('special-attribute');
    let attribute;

    let addButton = document.querySelector('button[type=submit]');
    addButton.addEventListener('click', add);

    let previewUl = document.querySelectorAll('ul')[0];
    let snowUl = document.querySelectorAll('ul')[1];

    function add(event) {
        event.preventDefault();

        if (nameRef.value === '' || heightRef.value === '' || locationRef.value === '' || creatorRef.value === '' || attributeRef.value === '') {
            return;
        }

        let previwLi = document.createElement('li');
        previwLi.classList.add('snowman-info');
        let previewArticle = document.createElement('article');
        let nameP = document.createElement('p');
        nameP.textContent = `Name: ${nameRef.value}`;
        name = nameRef.value;
        let heightP = document.createElement('p');
        heightP.textContent = `Height: ${heightRef.value}`;
        height = heightRef.value;
        let locationP = document.createElement('p');
        locationP.textContent = `Location: ${locationRef.value}`;
        location = locationRef.value;
        let creatorP = document.createElement('p');
        creatorP.textContent = `Creator: ${creatorRef.value}`;
        creator = creatorRef.value;
        let attributeP = document.createElement('p');
        attributeP.textContent = `Attribute: ${attributeRef.value}`;
        attribute = attributeRef.value;
        
        previewArticle.appendChild(nameP);
        previewArticle.appendChild(heightP);
        previewArticle.appendChild(locationP);
        previewArticle.appendChild(creatorP);
        previewArticle.appendChild(attributeP);

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('btn-container')
        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        let nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', next);

        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(nextButton);

        previwLi.appendChild(previewArticle);
        previwLi.appendChild(buttonDiv);
        previewUl.appendChild(previwLi);

        addButton.disabled = true;
        nameRef.value = '';
        heightRef.value = '';
        locationRef.value = '';
        creatorRef.value = '';
        attributeRef.value = '';

    }

    function edit(event) {
        let previewLi = event.currentTarget.parentElement.parentElement;
        previewLi.remove();

        nameRef.value = name;
        heightRef.value = height;
        locationRef.value = location;
        creatorRef.value = creator;
        attributeRef.value = attribute;
        addButton.disabled = false;
    }

    function next(event) {
        let previewLi = event.currentTarget.parentElement.parentElement;
        previewLi.remove();

        let snowLi = document.createElement('li');
        snowLi.classList.add('snowman-content');
        let snowArticle = document.createElement('article');
        let nameP = document.createElement('p');
        nameP.textContent = `Name: ${name}`;
        let heightP = document.createElement('p');
        heightP.textContent = `Height: ${height}`;
        let locationP = document.createElement('p');
        locationP.textContent = `Location: ${location}`;
        let creatorP = document.createElement('p');
        creatorP.textContent = `Creator: ${creator}`;
        let attributeP = document.createElement('p');
        attributeP.textContent = `Attribute: ${attribute}`;
        
        let sendButton = document.createElement('button');
        sendButton.classList.add('send-btn');
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', send);

        snowArticle.appendChild(nameP);
        snowArticle.appendChild(heightP);
        snowArticle.appendChild(locationP);
        snowArticle.appendChild(creatorP);
        snowArticle.appendChild(attributeP);
        snowArticle.appendChild(sendButton);

        snowLi.appendChild(snowArticle);
        snowUl.appendChild(snowLi);
    }

    function send(event) {
        let snowLi = event.currentTarget.parentElement.parentElement;
        snowLi.remove();

        let backButton = document.createElement('button');
        backButton.classList.add('back-btn');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', back);

        let body = document.getElementsByTagName('body')[0];
        body.appendChild(backButton);

        let img = document.getElementById('back-img');
        img.style.display = 'block';

    }

    function back(event) {
        window.location.reload();
    }


}
