import {html} from '../../node_modules/lit-html/lit-html.js';
import { addCatch } from '../utility/addCatch.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';
import { showCatches } from './catchesView.js';


const temp = (userData) => html`
    <section id="home-view">
        <fieldset id="main">
            <legend>Catches</legend>
            <div id="catches">
                
            </div>
        </fieldset>
        <aside>
            <button @click=${showCatches} class="load">Load</button>
            <form @submit=${addCatch} id="addForm">
                <fieldset>
                    <legend>Add Catch</legend>
                    <label>Angler</label>
                    <input type="text" name="angler" class="angler" />
                    <label>Weight</label>
                    <input type="number" name="weight" class="weight" />
                    <label>Species</label>
                    <input type="text" name="species" class="species" />
                    <label>Location</label>
                    <input type="text" name="location" class="location" />
                    <label>Bait</label>
                    <input type="text" name="bait" class="bait" />
                    <label>Capture Time</label>
                    <input type="number" name="captureTime" class="captureTime" />
                    ${userData? html`<button class="add">Add</button>` : 
                                html`<button disabled class="add">Add</button>`}
                </fieldset>
            </form>
        </aside>
    </section>
`;


export function showHomeView() {
    const userData = userUtil.getUserData();
    renderer(temp(userData));
}
