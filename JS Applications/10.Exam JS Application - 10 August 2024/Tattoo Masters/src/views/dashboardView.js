import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <h2>Collection</h2>
    <section id="tattoos">
        <!-- Display a div with information about every post (if any)-->
         ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`}
    </section>   
`;

const cardTemp = (item) => html`
    <div class="tattoo">
        <img src=${item.imageUrl} alt="example1" />
        <div class="tattoo-info">
            <h3 class="type">${item.type}</h3>
            <span>Uploaded by </span>
            <p class="user-type">${item.userType}</p>
            <a class="details-btn" href="/details/${item._id}">Learn More</a>
        </div>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

