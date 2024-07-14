function solve() {

    document.getElementById('loadBooks').addEventListener('click', onLoad);
    const tableBodyRef = document.querySelector('tbody');
    tableBodyRef.innerHTML = '';
    const URL = 'http://localhost:3030/jsonstore/collections/books';

    const bodyRef = document.querySelector('body');
    const formRef = document.querySelector('form');
    formRef.addEventListener('submit', onSubmit);
    formRef.style.display = 'block';

    const editFormRef = formRef.cloneNode(true);
    editFormRef.style.display = 'none';
    const editFormH3 = editFormRef.querySelector('h3');
    editFormH3.textContent = 'Edit FORM';
    const saveBtn = editFormRef.querySelector('button');
    saveBtn.textContent = 'Save';

    bodyRef.appendChild(editFormRef);

    let id;

    async function onSubmit(event) {
        event.preventDefault();

        const newData = new FormData(formRef);
        const title = newData.get('title');
        const author = newData.get('author');

        if (!title || !author) {
            return;
        }

        const newBook = { author, title };
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        }

        const response = await fetch(URL, option);
        onLoad();
        formRef.reset();
    }

    async function onLoad(event) {

        const response = await fetch(URL);
        const data = await response.json();

        clear();

        Object.keys(data).forEach(el => {
            const elTr = document.createElement('tr');
            elTr.id = el;
            const bookNameTd = document.createElement('td');
            bookNameTd.textContent = data[el].title;
            const authorNameTd = document.createElement('td');
            authorNameTd.textContent = data[el].author;

            const btnTd = document.createElement('td');
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', createEdit);
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', onDel);

            btnTd.appendChild(editBtn);
            btnTd.appendChild(delBtn);

            elTr.appendChild(bookNameTd);
            elTr.appendChild(authorNameTd);
            elTr.appendChild(btnTd);
            tableBodyRef.appendChild(elTr);
        });
    }

    async function createEdit(event) {
        event.preventDefault();

        formRef.style.display = 'none';
        editFormRef.style.display = 'block';

        const editTr = event.currentTarget.parentElement.parentElement;
        id = editTr.id;

        const editTitle = editTr.querySelectorAll('td')[0].textContent;
        const editAuthor = editTr.querySelectorAll('td')[1].textContent;
        const newTitle = editFormRef.querySelector('input[name=title]');
        newTitle.value = editTitle;
        const newAuthor = editFormRef.querySelector('input[name=author]');
        newAuthor.value = editAuthor;

        const saveBtn = editFormRef.querySelector('button');
        saveBtn.addEventListener('click', onSave);
    }

    async function onSave(event) {
        event.preventDefault();

        const fullPatch = `${URL}/${id}`;

        const editData = new FormData(editFormRef);
        const title = editData.get('title');
        const author = editData.get('author');

        if (!title || !author) {
            return;
        }

        const editBook = { author, title };
        const option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editBook)
        }

        const response = await fetch(fullPatch, option);
        onLoad();
        editFormRef.reset();
        editFormRef.style.display = 'none';
        formRef.style.display = 'block';
    }

    async function onDel(event) {
        const id = event.currentTarget.parentElement.parentElement.id;
        const fullPatch = `${URL}/${id}`;

        const delResponse = await fetch(fullPatch, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const getResponse = await fetch(URL);
        const data = await getResponse.json();
        onLoad(data);
    }

    function clear() {
        tableBodyRef.innerHTML = '';
    }

}

solve();