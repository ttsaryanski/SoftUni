import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add Product</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="name" id="name" placeholder="Product Name" />
                <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
                <input type="text" name="category" id="product-category" placeholder="Category" />
                <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
                <input type="text" name="price" id="product-price" placeholder="Price" />
                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {name, imageUrl, category, description, price} = data;
    if (!name || !imageUrl || !category || !description || !price) {
        return alert('Oops');
    }

    await dataService.createNew({name, imageUrl, category, description, price});
    goTo('/dashboard');
    formRef.reset();
}
