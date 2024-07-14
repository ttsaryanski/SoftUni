function attachEvents() {

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const ulRef = document.getElementById('phonebook');
    const personRef = document.getElementById('person');
    const phoneRef = document.getElementById('phone');

    const URL = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener("click", onLoad);

    async function onLoad(event) {
        const response = await fetch(URL);
        const phonebookData = await response.json();

        ulRef.innerHTML = '';
        getData(phonebookData);
    }

    createBtn.addEventListener('click', onCreate);

    async function onCreate(event) {
        let person = personRef.value;
        let phone = phoneRef.value;

        let option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person, phone })
        }

        await fetch(URL, option);
        personRef.value = '';
        phoneRef.value = '';
        onLoad();
    }

    
    function getData(data) {
        Object.keys(data).forEach(el => {
            let elLi = document.createElement('li');
            elLi.id = el;
            elLi.textContent = `${data[el].person}: ${data[el].phone}`;
            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', onDelete);
            elLi.appendChild(delBtn);
            
            ulRef.appendChild(elLi);
        });

    }

    async function onDelete(event) {
        let id = event.currentTarget.parentElement.id;
        let fullPatch = `${URL}/${id}`;

        let option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await fetch(fullPatch, option);
        onLoad();
    }
    
}

attachEvents();