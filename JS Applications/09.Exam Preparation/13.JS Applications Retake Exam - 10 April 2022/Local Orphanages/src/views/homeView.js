import {html} from '../../node_modules/lit-html/lit-html.js';
import {renderer} from '../utility/render.js'

const temp = () => html`
`;

export function showHomeView() {
    renderer(temp());
}
