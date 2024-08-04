import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { dataService } from '../service/dataService.js';
import { userUtil } from '../utility/userUtil.js';

const temp = (handler, items, hasUser) => html`
    <!-- Search Page (Only for logged-in users) -->
    <section id="search">
        <h2>Search by Brand</h2>
        <form @submit=${handler} class="search-wrapper cf">
            <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
            <button type="submit">Search</button>
        </form>
        <h3>Results:</h3>
        <div id="search-container">
            <ul class="card-wrapper">
                <!-- Display a li with information about every post (if any)-->
                ${items ? items.map(item => cardTemp(item, hasUser)) : html`<h2>There are no results found.</h2>`}
            </ul>
        </div>
    </section>
`;

const cardTemp = (item, hasUser) => html`
    <li class="card">
        <img src=${item.imageUrl} alt="travis" />
        <p><strong>Brand: </strong><span class="brand">${item.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${item.model}</span></p>
        <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
        ${hasUser ? html`<a class="details-btn" href="/details/${item._id}">Details</a>` : ''}
    </li>
`;

export function showSearchView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {query = data['search']} = data;
    if (!query) {
        return alert('Oops')
    }
    
    const userData = userUtil.getUserData();
    const hasUser = Boolean(userData);

    let items = null;
    const result = await dataService.searchItem(query);
    if (result.length > 0) {
        items = result;
    }
    
    renderer(temp(createSubmitHandler(onSubmit), items, hasUser));
    formRef.reset();
}