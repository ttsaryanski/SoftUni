import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="title" id="job-title" placeholder="Title" .value=${item.title} />
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${item.imageUrl} />
                <input type="text" name="category" id="job-category" placeholder="Category" .value=${item.category} />
                <textarea id="job-description" name="description" placeholder="Description" rows="4"
                    cols="50" .value=${item.description}></textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                    cols="50" .value=${item.requirements}></textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${item.salary} />

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
    const {title, imageUrl, category, description, requirements, salary} = data;
    if (!title || !imageUrl || !category || !description || !requirements || !salary) {
        return alert('Oops');
    }

    await dataService.editItem(id, {title, imageUrl, category, description, requirements, salary});
    goTo(`/details/${id}`);
    formRef.reset();
}
