import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard page -->
    <h2>Solutions</h2>
        <section id="solutions">
            <!-- Display a div with information about every post (if any)-->
            ${items.length > 0 ?
                items.map(item => cardTemp(item)) :
                html`
                    <!-- Display an h2 if there are no posts -->
                    <h2 id="no-solution">No Solutions Added.</h2>
                `}
        </section>
`;

const cardTemp = (item) => html`
    <div class="solution">
        <img src=${item.imageUrl} alt="example1" />
        <div class="solution-info">
            <h3 class="type">${item.type}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">Learn More</a>
        </div>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

