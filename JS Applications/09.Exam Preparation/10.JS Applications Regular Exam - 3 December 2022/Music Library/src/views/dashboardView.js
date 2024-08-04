import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
             ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<h2>There are no albums added yet.</h2>`}
        </ul>        
    </section>
`;

const cardTemp = (item) => html`
    <li class="card">
        <img src=${item.imageUrl} alt="travis" />
        <p><strong>Singer/Band: </strong><span class="singer">${item.singer}</span></p>
        <p><strong>Album name: </strong><span class="album">${item.album}</span></p>
        <p><strong>Sales:</strong><span class="sales">${item.sales}</span></p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </li>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

