import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('towns');
const matchRoot = document.getElementById('result');
document.querySelector('button').addEventListener('click', search)

search();

function search(e) {
    let searchText = null;
    if (e) {
        searchText = document.getElementById('searchText').value;
    }

    let matches = towns.filter(x => x.includes(searchText));

    let templ = html`<ul>${towns.map(town => createTempl(town, searchText))}</ul>`
    render(templ, root);

    if (matches.length) {
        renderMatches(matches.length);
    }

    if (!matches.length && e) {
        matchRoot.textContent =`0 matches found`;
    }
}

function renderMatches(count) {
    const text = 'matches found';
    matchRoot.textContent =`${count} ${text}`;
}

function createTempl(town, searchText) {
    let isMatch = town.includes(searchText);

    return html`<li class=${isMatch? 'active' : ''}>${town}</li>`
}
