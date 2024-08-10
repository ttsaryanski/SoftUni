import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';

const temp = (items) => html`
    <!-- My Listings Page -->
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">
            <!-- Display all records -->
            ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}   
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

export async function showMyCarView() {
    const userData = userUtil.getUserData();
    const id = userData._id;

    const items = await dataService.getMyCar(id);

    renderer(temp(items));
}