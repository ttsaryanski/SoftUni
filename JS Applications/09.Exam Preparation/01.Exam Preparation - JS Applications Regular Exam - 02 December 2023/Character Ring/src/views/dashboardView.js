import {html} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (characters) => html`
    <!-- Dashboard page -->
    <h2>Characters</h2>
    <section id="characters">
        <!-- Display a div with information about every post (if any)-->
        ${characters.length ? characters.map(character => cardTemp(character)) : html`<h2>No added Heroes yet.</h2>`}
    </section>   
`;

const cardTemp = (character) => html`
    <div class="character">
        <img src=${character.imageUrl} alt="example2" />
        <div class="hero-info">
            <h3 class="category">${character.category}</h3>
            <p class="description">${character.description}</p>
            <a class="details-btn" href="/details/${character._id}">More Info</a>
        </div>
    </div>
`;

export async function showDashboardView() {
    const characters = await dataService.getAll();

    renderer(temp(characters));
}
