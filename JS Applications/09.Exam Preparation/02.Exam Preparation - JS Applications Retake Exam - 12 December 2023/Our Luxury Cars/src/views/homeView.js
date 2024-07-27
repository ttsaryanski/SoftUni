import { html} from '../../node_modules/lit-html/lit-html.js';
import { renderer} from '../utility/render.js';

const temp = () => html`
    <!-- Home page -->
    <section id="hero">
      <h1>
        Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
      </h1>
    </section>
`;

export function showHomeView() {
    renderer(temp());
}

