import { html, render } from './node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

const root = document.getElementById('root');

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { towns } = Object.fromEntries(formData);

    const townsArr = towns.split(', ');
    const htmlUl = createUl(townsArr);

    render(htmlUl, root);
    form.reset();
}

function createUl(towns) {
    return html `
        <ul>
            ${towns.map(town => html `<li>${town}</li>`)}
        </ul>
    `
}