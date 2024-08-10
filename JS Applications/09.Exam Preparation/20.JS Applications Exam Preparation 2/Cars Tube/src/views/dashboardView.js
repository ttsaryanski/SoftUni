import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- All Listings Page -->
    <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
            <!-- Display all records -->
            ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<p class="no-cars">No cars in database.</p>`}    
        </div>
    </section>
`;

const cardTemp = (item) => html`
    <div class="listing">
        <div class="preview">
            <img src=${item.imageUrl}>
        </div>
        <h2>${item.brand} ${item.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${item.year}</h3>
                <h3>Price: ${item.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${item._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

