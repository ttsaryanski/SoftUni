import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add tattoo</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="type" id="type" placeholder="Tattoo Type" />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                <select id="user-type" name="user-type">
                    <option value="" disabled selected>Select your role</option>
                    <option value="Tattoo Artist">Tattoo Artist</option>
                    <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                    <option value="First Time in Tattoo">First Time in Tattoo</option>
                    <option value="Tattoo Collector">Tattoo Collector</option>
                </select>
                <button type="submit">Add tattoo</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {type, imageUrl = data['image-url'], description, userType = data['user-type']} = data;
    if (!type || !imageUrl || !description || !userType) {
        return alert('Oops');
    }

    await dataService.createNew({type, imageUrl, description, userType});
    goTo('/dashboard');
    formRef.reset();
}
