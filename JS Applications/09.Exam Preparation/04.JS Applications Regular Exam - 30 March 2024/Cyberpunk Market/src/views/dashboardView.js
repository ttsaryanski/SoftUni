import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
<!-- Dashboard page -->
<h3 class="heading">Market</h3>
    <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
        ${items.length > 0 ? items.map(item => cardTemp(item))
            : html`
                <!-- Display an h2 if there are no posts -->
                <h3 class="empty">No Items Yet</h3>
            `}       
    </section>   
`;

const cardTemp = (item) => html`
    <div class="item">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="model">${item.item}</h3>
        <div class="item-info">
            <p class="price">Price: €${item.price}</p>
            <p class="availability">${item.availability}</p>
            <p class="type">Type: ${item.type}</p>
        </div>
        <a class="details-btn" href="/details/${item._id}">Uncover More</a>
    </div>
    
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

