import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${item.singer} />
                <input type="text" name="album" id="album-album" placeholder="Album" .value=${item.album} />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${item.imageUrl} />
                <input type="text" name="release" id="album-release" placeholder="Release date" .value=${item.release} />
                <input type="text" name="label" id="album-label" placeholder="Label" .value=${item.label} />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${item.sales} />
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
    const {singer, album, imageUrl, release, label, sales} = data;
    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert('Oops');
    }

    await dataService.editItem(id, {singer, album, imageUrl, release, label, sales});
    goTo(`/details/${id}`);
    formRef.reset();
}
