import { cats } from "./catSeeder.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('allCats');

render(createAllCatsTempl(), root);

function createAllCatsTempl() {
    return html`
        <ul>
            ${cats.map(cat => createCatTempl(cat))}
        </ul>
    `
}

function createCatTempl(cat) {
    return html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${toggleStatus}>Show status code</button>
                <div class="status" style="display: none" id=${cat.id}>
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>
    `
}

function toggleStatus(e) {
    const statusDiv = e.target.nextElementSibling;
    
    const currentState = statusDiv.style.display;

    statusDiv.style.display = currentState === 'block' ? 'none' : 'block';
    e.target.textContent = currentState === 'block' ? "Show status code" : 'Hide status code';
}