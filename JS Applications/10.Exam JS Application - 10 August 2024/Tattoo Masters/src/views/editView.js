import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit tattoo</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="type" id="type" placeholder="Tattoo Type" .value=${item.type} />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${item.imageUrl} />
                <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" .value=${item.description}></textarea>
                <select id="user-type" name="user-type" .value=${item.userType}>
                    <option value="" disabled selected>Select your role</option>
                    <option value="Tattoo Artist">Tattoo Artist</option>
                    <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                    <option value="First Time in Tattoo">First Time in Tattoo</option>
                    <option value="Tattoo Collector">Tattoo Collector</option>
                </select>
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
    const {type, imageUrl = data['image-url'], description, userType = data['user-type']} = data;
    if (!type || !imageUrl || !description || !userType) {
        return alert('Oops');
    }

    await dataService.editItem(id, {type, imageUrl, description, userType});
    goTo(`/details/${id}`);
    formRef.reset();
}
