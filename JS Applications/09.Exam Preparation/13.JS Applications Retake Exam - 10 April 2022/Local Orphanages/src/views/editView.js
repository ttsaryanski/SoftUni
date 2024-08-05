import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit-page" class="auth">
        <form @submit=${handler} id="edit">
            <h1 class="title">Edit Post</h1>
            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" .value=${item.title}>
            </article>
            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" .value=${item.description}>
            </article>
            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" .value=${item.imageUrl}>
            </article>
            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" .value=${item.address}>
            </article>
            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" .value=${item.phone}>
            </article>
            <input type="submit" class="btn submit" .value="Edit Post">
        </form>
    </section>
`;

let id = null;
export async function showEditView(ctx) {
    id = ctx.params.id;
    const item = await dataService.getDetails(id);

    renderer(temp(item, createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {title, description, imageUrl, address, phone} = data;
    if (!title || !imageUrl || !description || !address || !phone) {
        return alert('Oops');
    }

    await dataService.editItem(id, {title, description, imageUrl, address, phone});
    goTo(`/details/${id}`);
    formRef.reset();
}
