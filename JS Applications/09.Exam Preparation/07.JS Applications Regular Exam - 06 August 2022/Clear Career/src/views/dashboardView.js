import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Job Offers</h2>
        <!-- Display a div with information about every post (if any)-->
        ${items.length > 0 ? items.map(item => cardTemp(item))
        : html`<h2>No offers yet.</h2>`}                
    </section>
`;

const cardTemp = (item) => html`
    <div class="offer">
        <img src=${item.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${item.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

