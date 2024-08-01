import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <h2>Available Motorcycles</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${items.length > 0 ? items.map(item => cardTemp(item))
        : html`
            <!-- Display an h2 if there are no posts -->
            <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
        `}
    </section>      
`;

const cardTemp = (item) => html`
    <div class="motorcycle">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="model">${item.model}</h3>
        <p class="year">Year: ${item.year}</p>
        <p class="mileage">Mileage: ${item.mileage} km.</p>
        <p class="contact">Contact Number: ${item.contact}</p>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>    
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

