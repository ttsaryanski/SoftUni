import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <h2>Add Motorcycle</h2>
        <div class="form">
            <h2>Add Motorcycle</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="model" id="model" placeholder="Model" />
                <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
                <input type="number" name="year" id="year" placeholder="Year" />
                <input type="number" name="mileage" id="mileage" placeholder="mileage" />
                <input type="text" name="contact" id="contact" placeholder="contact" />
                <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
                <button type="submit">Add Motorcycle</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {model, imageUrl, year, mileage, contact, about} = data;
    if (!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert('Oops');
    }
    await dataService.createNew({model, imageUrl, year, mileage, contact, about});
    goTo('/dashboard');
    formRef.reset();
}
