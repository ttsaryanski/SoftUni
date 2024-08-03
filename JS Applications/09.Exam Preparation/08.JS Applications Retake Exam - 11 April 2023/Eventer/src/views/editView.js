import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Event</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="name" id="name" placeholder="Event" .value=${item.name} />
                <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" .value=${item.imageUrl} />
                <input type="text" name="category" id="event-category" placeholder="Category" .value=${item.category} />
                <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50" .value=${item.description}></textarea>
                <label for="date-and-time">Event Time:</label>
                <input type="text" name="date" id="date" placeholder="When?" .value=${item.date} />
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
    const {name, imageUrl, category, description, date} = data;
    if (!name || !imageUrl || !category || !description || !date) {
        return alert('Oops');
    }

    await dataService.editItem(id, {name, imageUrl, category, description, date});
    goTo(`/details/${id}`);
    formRef.reset();
}
