import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <h2>Products</h2>
            <section id="dashboard">
                <!-- Display a div with information about every post (if any)-->
                ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<h2>No products yet.</h2>`}
            </section>           
`;

const cardTemp = (item) => html`
    <div class="product">
        <img src=${item.imageUrl} alt="example1" />
        <p class="title">${item.name}</p>
        <p><strong>Price:</strong><span class="price">${item.price}</span>$</p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

