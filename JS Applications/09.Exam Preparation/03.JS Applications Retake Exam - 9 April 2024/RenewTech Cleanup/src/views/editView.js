import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form @submit=${handler} class="edit-form">
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Solution Type"
                    .value=${item.type}
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                    .value=${item.imageUrl}
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="2"
                    cols="10"
                    .value=${item.description}
                ></textarea>
                <textarea
                    id="more-info"
                    name="more-info"
                    placeholder="more Info"
                    rows="2"
                    cols="10"
                    .value=${item.learnMore}
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
    const {type, imageUrl = data['image-url'], description, learnMore = data['more-info']} = data;
    if (!type || !imageUrl || !description || !learnMore) {
        return alert('Oops');
    }

    await dataService.editItem(id, {type, imageUrl, description, learnMore});
    goTo(`/details/${id}`);
    formRef.reset();
}
