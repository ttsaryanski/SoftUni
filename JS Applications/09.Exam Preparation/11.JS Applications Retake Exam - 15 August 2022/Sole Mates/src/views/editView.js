import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit item</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${item.brand} />
                <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${item.model} />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${item.imageUrl} />
                <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${item.release} />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${item.designer} />
                <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${item.value} />
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
    const {brand, model, imageUrl, release, designer, value} = data;
    if (!brand || !model || !imageUrl || !release || !designer || !value) {
        return alert('Oops');
    }

    await dataService.editItem(id, {brand, model, imageUrl, release, designer, value});
    goTo(`/details/${id}`);
    formRef.reset();
}
