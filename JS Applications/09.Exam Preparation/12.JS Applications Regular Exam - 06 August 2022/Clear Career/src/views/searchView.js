import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { dataService } from '../service/dataService.js';

const temp = (handler, items) => html`
    
`;

const cardTemp = (item) => html`
    
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