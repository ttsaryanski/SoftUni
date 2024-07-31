import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <h2>Fun Facts</h2>
    <section id="dashboard">       
        ${items.length > 0 ? items.map(item => cardTemp(item)) : 
            html`<!-- Display an h2 if there are no posts -->
                 <h2>No Fun Facts yet.</h2>`}
    </section>    
`;

const cardTemp = (item) => html`
    <!-- Display a div with information about every post (if any)-->
    <div class="fact">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="category">${item.category}</h3>
        <p class="description">${item.description}</p>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>    
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

