import {html} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler, char) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Character</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="category" id="category" placeholder="Character Type" .value=${char.category} />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${char.imageUrl} />
                <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" .value=${char.description}></textarea>
                <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2"
                    cols="10" .value=${char.moreInfo}></textarea>
                <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="" />
        </div>
    </section>
`;

let id = null;
export async function showEditView(ctx) {
    id = ctx.params.id;

    const char = await dataService.getDetails(id);

    renderer(temp(createSubmitHandler(onSubmit), char));
}

async function onSubmit(data, formRef) {
    const {category, imageUrl = data['image-url'], description, moreInfo = data['additional-info']} = data;

    if (!category || !imageUrl || !description || !moreInfo) {
        return alert('Oops');
    }

    await dataService.editChar(id, {category, imageUrl, description, moreInfo});
    goTo(`/details/${id}`);
    formRef.reset();
}
