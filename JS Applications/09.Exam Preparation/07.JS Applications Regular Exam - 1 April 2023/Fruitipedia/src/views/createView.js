import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="name" id="name" placeholder="Fruit Name" />
                <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
                <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                    cols="50"></textarea>
                <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10"
                    cols="50"></textarea>
                <button type="submit">Add Fruit</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {name, imageUrl, description, nutrition} = data;
    if (!name || !imageUrl || !description || !nutrition) {
        return alert('Oops');
    }

    await dataService.createNew({name, imageUrl, description, nutrition});
    goTo('/dashboard');
    formRef.reset();
}
