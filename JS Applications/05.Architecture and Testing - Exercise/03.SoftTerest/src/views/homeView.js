import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';

const temp = () => html`
    <div class="container home wrapper my-md-5 pl-md-5" data-section="home">
    <div class="d-md-flex flex-md-equal">
      <div class="col-md-5">
        <img class="responsive" src="./images/01.svg" />
      </div>
      <div class="home-text col-md-7">
        <h2 class="featurette-heading">
          Do you wonder if your idea is good?
        </h2>
        <p class="lead">Join our family =)</p>
        <p class="lead">Post your ideas!</p>
        <p class="lead">Find what other people think!</p>
        <p class="lead">Comment on other people's ideas.</p>
      </div>
    </div>
    <div class="bottom text-center">
      <a class="btn btn-secondary btn-lg" href="/dashboard">Get Started</a>
    </div>
  </div>
`;

export function showHomeView() {
    renderer(temp());
}
