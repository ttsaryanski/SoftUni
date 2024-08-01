import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
            <h2>Edit Motorcycle</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="model" id="model" placeholder="Model" .value=${item.model} />
                <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" .value=${item.imageUrl} />
                <input type="number" name="year" id="year" placeholder="Year" .value=${item.year} />
                <input type="number" name="mileage" id="mileage" placeholder="mileage" .value=${item.mileage} />
                <input type="number" name="contact" id="contact" placeholder="contact" .value=${item.contact} />
                <textarea id="about" name="about" placeholder="about" rows="10" cols="50" .value=${item.about}></textarea>
                <button type="submit">Edit Motorcycle</button>
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
    const {model, imageUrl, year, mileage, contact, about} = data;
    if (!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert('Oops');
    }

    await dataService.editItem(id, {model, imageUrl, year, mileage, contact, about});
    goTo(`/details/${id}`);
    formRef.reset();
}
