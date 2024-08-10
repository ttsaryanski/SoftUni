import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Listing Page -->
    <section id="edit-listing">
        <div class="container">
            <form @submit=${handler} id="edit-form">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" value=${item.brand}>
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" value=${item.model}>
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" value=${item.description}>
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" value=${item.year}>
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${item.imageUrl}>
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" value=${item.price}>
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
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
    const {brand, model, description, year, imageUrl, price} = data;
    if (!brand || !model || !description || !year || !imageUrl || !price) {
        return alert('Oops');
    }

    if (year <=0 || price <= 0) {
        return alert('Oops');
    }

    await dataService.editItem(id, {brand, model, description, year, imageUrl, price});
    goTo(`/details/${id}`);
    formRef.reset();
}
