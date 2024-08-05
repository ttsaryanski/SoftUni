import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    <!-- Dashboard -->
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>
        <!-- Display a div with information about every post (if any)-->
        <div class="all-posts">
            ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
        </div>
    </section>
`;

const cardTemp = (item) => html`
    <div class="post">
        <h2 class="post-title">${item.title}</h2>
        <img class="post-image" src=${item.imageUrl} alt="Material Image">
        <div class="btn-wrapper">
            <a href="/details/${item._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

