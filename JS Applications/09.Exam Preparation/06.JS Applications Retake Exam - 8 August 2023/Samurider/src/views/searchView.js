import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { dataService } from '../service/dataService.js';

const temp = (handler, items) => html`
    <!-- Search page -->
    <section id="search">
        <div class="form">
            <h4>Search</h4>
            <form @submit=${handler} class="search-form">
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4 id="result-heading">Results:</h4>
        <div class="search-result">
            ${items ? items.map(item => cardTemp(item)) : html`<h2 class="no-avaliable">No result.</h2>`}   
        </div>
    </section>
`;

const cardTemp = (item) => html`
    <div class="motorcycle">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="model">${item.model}</h3>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`;

export function showSearchView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {query = data['search']} = data;
    if (!query) {
        return alert('Oops')
    }
    
    let items = null;
    const result = await dataService.searchItem(query);
    if (result.length > 0) {
        items = result;
    }
    
    renderer(temp(createSubmitHandler(onSubmit), items));
    formRef.reset();
}