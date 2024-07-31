import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Fact</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="category" id="category" placeholder="Category" .value=${item.category} />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${item.imageUrl} />
                <textarea id="description" name="description" placeholder="Description" rows="10"
                    cols="50" .value=${item.description}></textarea>
                <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
                    cols="50" .value=${item.moreInfo}></textarea>
                <button type="submit">Post</button>
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
    const {category, imageUrl = data['image-url'], description, moreInfo = data['additional-info']} = data;
    if (!category || !imageUrl || !description || !moreInfo) {
        return alert('Oops');
    }

    await dataService.editItem(id, {category, imageUrl, description, moreInfo});
    goTo(`/details/${id}`);
    formRef.reset();
}
