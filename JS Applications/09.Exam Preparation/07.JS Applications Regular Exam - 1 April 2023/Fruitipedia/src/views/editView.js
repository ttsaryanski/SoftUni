import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="name" id="name" placeholder="Fruit Name" .value=${item.name} />
                <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value=${item.imageUrl} />
                <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                    cols="50" .value=${item.description}></textarea>
                <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10"
                    cols="50" .value=${item.nutrition}></textarea>
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
    const {name, imageUrl, description, nutrition} = data;
    if (!name || !imageUrl || !description || !nutrition) {
        return alert('Oops');
    }

    await dataService.editItem(id, {name, imageUrl, description, nutrition});
    goTo(`/details/${id}`);
    formRef.reset();
}
