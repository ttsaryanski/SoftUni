import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="name" id="name" placeholder="Product Name" .value=${item.name} />
                <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" .value=${item.imageUrl} />
                <input type="text" name="category" id="product-category" placeholder="Category" .value=${item.category} />
                <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50" .value=${item.description}></textarea>
                <input type="text" name="price" id="product-price" placeholder="Price" .value=${item.price} />
                <button type="submit">post</button>
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
    const {name, imageUrl, category, description, price} = data;
    if (!name || !imageUrl || !category || !description || !price) {
        return alert('Oops');
    }

    await dataService.editItem(id, {name, imageUrl, category, description, price});
    goTo(`/details/${id}`);
    formRef.reset();
}
