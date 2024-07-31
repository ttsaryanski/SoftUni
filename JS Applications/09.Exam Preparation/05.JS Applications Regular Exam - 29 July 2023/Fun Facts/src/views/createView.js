import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add Fact</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="category" id="category" placeholder="Category" />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                <textarea id="description" name="description" placeholder="Description" rows="10"
                    cols="50"></textarea>
                <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
                    cols="50"></textarea>
                <button type="submit">Add Fact</button>
            </form>
        </div>
    </section>   
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {category, imageUrl = data['image-url'], description, moreInfo = data['additional-info']} = data;
    if (!category || !imageUrl || !description || !moreInfo) {
        return alert('Oops');
    }

    await dataService.createNew({category, imageUrl, description, moreInfo});
    goTo('/dashboard');
    formRef.reset();
}
