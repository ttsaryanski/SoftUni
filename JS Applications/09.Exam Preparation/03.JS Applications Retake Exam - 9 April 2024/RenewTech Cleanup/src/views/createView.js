import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Solution</h2>
            <form @submit=${handler} class="create-form">
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Solution Type"
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="2"
                    cols="10"
                ></textarea>
                <textarea
                    id="more-info"
                    name="more-info"
                    placeholder="more Info"
                    rows="2"
                    cols="10"
                ></textarea>
                <button type="submit">Add Solution</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {type, imageUrl = data['image-url'], description, learnMore = data['more-info']} = data;
    if (!type || !imageUrl || !description || !learnMore) {
        return alert('Oops');
    }

    await dataService.createNew({type, imageUrl, description, learnMore});
    goTo('/dashboard');
    formRef.reset();
}
