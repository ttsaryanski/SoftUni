import {html} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Character</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="category" id="category" placeholder="Character Type" />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2"
                    cols="10"></textarea>
                <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="" />
        </div>
    </section>
`;

export function showCreatView() {
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