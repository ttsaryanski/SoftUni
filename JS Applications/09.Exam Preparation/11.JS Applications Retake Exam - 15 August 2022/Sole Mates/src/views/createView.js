import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add item</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                <input type="text" name="model" id="shoe-model" placeholder="Model" />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                <input type="text" name="value" id="shoe-value" placeholder="Value" />
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {brand, model, imageUrl, release, designer, value} = data;
    if (!brand || !model || !imageUrl || !release || !designer || !value) {
        return alert('Oops');
    }

    await dataService.createNew({brand, model, imageUrl, release, designer, value});
    goTo('/dashboard');
    formRef.reset();
}
