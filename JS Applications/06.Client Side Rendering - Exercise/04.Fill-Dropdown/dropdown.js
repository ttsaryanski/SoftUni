import {html,render} from './node_modules/lit-html/lit-html.js';

const URL = 'http://localhost:3030/jsonstore/advanced/dropdown';

const root = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener('submit', addItem)

getDropdown();

async function getDropdown() {
    const response = await fetch(URL);
    const data = await response.json();

    createDroops(Object.values(data));
}

function createDroops(droops) {
    const dropdownTempl = html`${droops.map(droop => html`<option value=${droop._id}>${droop.text}</option>`)}`;
    render(dropdownTempl, root);
}


function addItem(e) {
    e.preventDefault();

    const droop = document.getElementById('itemText').value;

    postDroop(droop);
}

async function postDroop(droop) {
    await fetch(URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: droop})
    })
    
    window.location.reload();
}