import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Collectibles</h2>
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<h2>There are no items added yet.</h2>`}
        </ul>    
    </section>
`;

const cardTemp = (item) => html`
    <li class="card">
        <img src=${item.imageUrl} alt="travis" />
        <p><strong>Brand: </strong><span class="brand">${item.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${item.model}</span></p>
        <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </li>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

