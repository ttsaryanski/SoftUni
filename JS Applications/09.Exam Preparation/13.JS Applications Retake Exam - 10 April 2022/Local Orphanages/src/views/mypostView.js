import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';

const temp = (items) => html`
    <!-- My Posts -->
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>
        <!-- Display a div with information about every post (if any)-->
        <div class="my-posts">
            ${items.length > 0 ? items.map(item => cardTemp(item)) : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
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

export async function showMyPostView() {
    const userData = userUtil.getUserData();
    const id = userData._id;

    const items = await dataService.getMyPost(id);

    renderer(temp(items));
}