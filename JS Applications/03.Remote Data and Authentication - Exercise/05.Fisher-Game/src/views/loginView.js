import {html} from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { updateNav } from '../utility/updateNav.js';
import { showCatches } from './catchesView.js';

const temp = () => html`
    <section id="login-view">
        <h2>Login</h2>
        <form @submit=${onSubmit} id="login">
            <label>Email: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <p class="notification"></p>
            <button>Login</button>
        </form>
    </section>
`;

export function showLoginView() {
    renderer(temp());
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);

    if (!email || !password) {
        return alert('Ooopps');
    }

    await userService.login({email, password});
    updateNav();
    goTo('/home');
    showCatches();
    e.target.reset();
}