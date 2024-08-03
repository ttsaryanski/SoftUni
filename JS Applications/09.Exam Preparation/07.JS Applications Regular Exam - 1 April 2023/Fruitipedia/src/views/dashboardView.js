import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <h2>Fruits</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${items.length > 0 ? items.map(item => cardTemp(item))
        : html`<h2>No fruit info yet.</h2>`}
    </section>   
`;

const cardTemp = (item) => html`
    <div class="fruit">
        <img src=${item.imageUrl} />
        <h3 class="title">${item.name}</h3>
        <p class="description">${item.description}</p>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

