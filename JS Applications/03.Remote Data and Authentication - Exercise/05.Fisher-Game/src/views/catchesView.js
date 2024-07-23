import {html, render} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { delCatch } from '../utility/del.js';
import { updateCatch } from '../utility/updateCatch.js';
import { userUtil } from '../utility/userUtil.js';


const temp = (catches) => html`
    <legend>Catches</legend>
    <div id="catches">
        ${catches.map(x => catchTemp(x))}
    </div>
`;

let isOwner = false;
function catchTemp(x) {
    const userData = userUtil.getUserData();
    if (userData) {
        isOwner = userUtil.hasOwner(x._ownerId);
    } else {
        isOwner = false;
    }
    
    return html`
        ${isOwner? html`
        <div class="catch">
        <label>Angler</label>
        <input type="text" class="angler" value=${x.angler}>
        <label>Weight</label>
        <input type="text" class="weight" value=${x.weight}>
        <label>Species</label>
        <input type="text" class="species" value=${x.species}>
        <label>Location</label>
        <input type="text" class="location" value=${x.location}>
        <label>Bait</label>
        <input type="text" class="bait" value=${x.bait}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value=${x.captureTime}>
        <button @click=${updateCatch} class="update" data-dev=${x._id}>Update</button>
        <button @click=${delCatch} class="delete" data-dev=${x._id}>Delete</button>
    </div>` : html`
    <div class="catch">
        <label>Angler</label>
        <input type="text" class="angler" value=${x.angler} disabled>
        <label>Weight</label>
        <input type="text" class="weight" value=${x.weight} disabled>
        <label>Species</label>
        <input type="text" class="species" value=${x.species} disabled>
        <label>Location</label>
        <input type="text" class="location" value=${x.location} disabled>
        <label>Bait</label>
        <input type="text" class="bait" value=${x.bait} disabled>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="120" disabled>
        <button class="update" disabled>Update</button>
        <button class="delete" disabled>Delete</button>
    </div>
    `}
`}

export async function showCatches() {
    //e.preventDefault();

    const catches = await dataService.getAll();
    render(temp(catches), document.getElementById('main'));
}

