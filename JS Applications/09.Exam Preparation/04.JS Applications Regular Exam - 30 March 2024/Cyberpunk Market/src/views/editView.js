import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { notify } from '../utility/notification.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form @submit=${handler} class="edit-form">
                <input
                    type="text"
                    name="item"
                    id="item"
                    placeholder="Item"
                    .value=${item.item}
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="item-image"
                    placeholder="Your item Image URL"
                    .value=${item.imageUrl}
                />
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price in Euro"
                    .value=${item.price}
                />
                <input
                    type="text"
                    name="availability"
                    id="availability"
                    placeholder="Availability Information"
                    .value=${item.availability}
                />
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Item Type"
                    .value=${item.type}
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="More About The Item"
                    rows="10"
                    cols="50"
                    .value=${item.description}
                ></textarea>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>   
`;

let id = null;
export async function showEditView(ctx) {
    id = ctx.params.id;
    const item = await dataService.getDetails(id);

    renderer(temp(item, createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {item, imageUrl, price, availability, type, description} = data;
    if (!item || !imageUrl || !price || !availability || !type || !description) {
        notify('Oops');
    } else {
        await dataService.editItem(id, {item, imageUrl, price, availability, type, description});
        goTo(`/details/${id}`);
        formRef.reset();
    }
}
