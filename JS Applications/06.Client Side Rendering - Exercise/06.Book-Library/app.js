import { html, render } from './node_modules/lit-html/lit-html.js';

const URL = 'http://localhost:3030/jsonstore/collections/books/';

const rootTable = document.getElementById('rootTable');
const rootForm = document.getElementById('rootForm');

const tableTempl = (books) => html`
      <button id="loadBooks" @click=${onLoadBooks}>LOAD ALL BOOKS</button>
      <table>
          <thead>
              <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
        </thead>
        <tbody>
            ${books?.map(book => createBookTempl(book))}
        </tbody>
</table>`;

const createBookTempl = (book) => html`
  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
      <button data-id=${book._id} @click=${onEdit}>Edit</button>
      <button data-id=${book._id} @click=${onDel}>Delete</button>
    </td>
  </tr>
`;

const addFormTempl = () => html`
    <form @submit=${onSubmit} id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

const editFormTempl = (book) => html`
    <form @submit=${saveEdit} id="edit-form">
        <input type="hidden" name="id" value=${book._id}>
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value=${book.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value=${book.author}>
        <input type="submit" value="Save">
    </form>
`;

render(tableTempl(), rootTable);
render(addFormTempl(), rootForm);


async function onLoadBooks(e) {
    const response = await fetch(URL);
    const data = await response.json();
    Object.entries(data).forEach(([id, obj]) => {
        if (!obj.hasOwnProperty('_id')) {
            return obj._id = id;
        }
    });
    
    render (tableTempl(Object.values(data)), rootTable)
}

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { title, author } = Object.fromEntries(formData);
    if (!title || !author) {
        return;
    }

    e.target.reset();
    saveBook({title, author});
}

async function saveBook(book) {
    const response = await fetch(URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    onLoadBooks();
}

async function onEdit(e) {
    const id = e.target.dataset.id;
    const book = await (getBookById(id));

    render(editFormTempl(book), rootForm)
}

function saveEdit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const {id,title,author} = Object.fromEntries(formData);
    if (!title || !author) {
        return;
    }

    storeEditBook({_id:id,title,author});
}

async function storeEditBook(book) {
    const response = await fetch(URL + book._id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    onLoadBooks();
}

async function onDel(e) {
    e.preventDefault();

    const id = e.target.dataset.id;
    const response = await fetch(URL + id, {method: 'delete'});
    onLoadBooks();
}

async function getBookById(id) {
    const response = await fetch(URL + id);
    const data = await response.json();
    return data;
}