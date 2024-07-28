import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { notify } from '../utility/notification.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form form-item">
        <h2>Share Your item</h2>
            <form @submit=${handler} class="create-form">
                <input
                    type="text"
                    name="item"
                    id="item"
                    placeholder="Item" />
                <input
                    type="text"
                    name="imageUrl"
                    id="item-image"
                    placeholder="Your item Image URL"
                />
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price in Euro"
                />
                <input
                    type="text"
                    name="availability"
                    id="availability"
                    placeholder="Availability Information"
                />
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Item Type"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="More About The Item"
                    rows="10"
                    cols="50"
                ></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    </section>   
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {item, imageUrl, price, availability, type, description} = data;
    if (!item || !imageUrl || !price || !availability || !type || !description) {
        notify('Oops');
    } else {
        await dataService.createNew({item, imageUrl, price, availability, type, description});
        goTo('/dashboard');
        formRef.reset();
    }
}
