import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add Event</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="name" id="name" placeholder="Event" />
                <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
                <input type="text" name="category" id="event-category" placeholder="Category" />
                <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
                <input type="text" name="date" id="date" placeholder="When?" />
                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {name, imageUrl, category, description, date} = data;
    if (!name || !imageUrl || !category || !description || !date) {
        return alert('Oops');
    }

    await dataService.createNew({name, imageUrl, category, description, date});
    goTo('/dashboard');
    formRef.reset();
}
