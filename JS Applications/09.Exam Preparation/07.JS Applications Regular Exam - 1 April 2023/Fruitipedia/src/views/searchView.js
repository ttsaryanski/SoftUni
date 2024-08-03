import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { dataService } from '../service/dataService.js';

const temp = (handler, items) => html`
    <!-- Search page -->
    <section id="search">
        <div class="form">
            <h2>Search</h2>
            <form @submit=${handler} class="search-form">
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
            <p class="no-result">No result.</p>
            <!--If there are matches display a div with information about every fruit-->
            ${items ? items.map(item => cardTemp(item)) : ''}
        </div>
    </section>
`;

const cardTemp = (item) => html`
    <div class="fruit">
        <img src=${item.imageUrl} />
        <h3 class="title">${item.name}</h3>
        <p class="description">${item.description}</p>
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