import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <h2>Current Events</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<h4>No Events yet.</h4>`}               
    </section>        
`;

const cardTemp = (item) => html`
    <div class="event">
        <img src=${item.imageUrl} />
        <p class="title">${item.name}</p>
        <p class="date">${item.date}</p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

