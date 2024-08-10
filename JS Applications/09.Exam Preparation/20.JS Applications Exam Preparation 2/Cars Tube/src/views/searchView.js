import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { dataService } from '../service/dataService.js';

const temp = (items) => html`
    <!-- Search Page -->
    <section id="search-cars">
        <h1>Filter by year</h1>
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${onSubmit} class="button-list">Search</button>
        </div>
        <h2>Results:</h2>
        <div class="listings">
            <!-- Display all records -->
            ${items ? items.map(item => cardTemp(item)) : html`<p class="no-cars"> No results.</p>`}    
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

export function showSearchView() {
    renderer(temp());
}

async function onSubmit() {
    const searchRef = document.getElementById('search-input');
    const query = searchRef.value;
    if (!query || query <= 0) {
        return alert('Oops')
    }
    
    let items = null;
    const result = await dataService.searchItem(query);
    if (result.length > 0) {
        items = result;
    }
    
    renderer(temp(items));
    formRef.reset();
}