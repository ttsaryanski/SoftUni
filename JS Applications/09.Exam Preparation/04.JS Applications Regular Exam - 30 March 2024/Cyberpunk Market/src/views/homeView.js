import {html} from '../../node_modules/lit-html/lit-html.js';
import {renderer} from '../utility/render.js'

const temp = () => html`
    <!-- Home page -->
    <section id="hero">
        <img src="./images/home.png" alt="home" />
        <p>We know who you are, we will contact you</p>
    </section>
`;

export function showHomeView() {
    renderer(temp());
}
