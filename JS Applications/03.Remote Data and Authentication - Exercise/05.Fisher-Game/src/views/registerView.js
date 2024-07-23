import {html} from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { updateNav } from '../utility/updateNav.js';
import { showCatches } from './catchesView.js';


const temp = () => html`
    <section id="register-view">
        <h2>Register</h2>
        <form @submit=${onSubmit} id="register">
            <label>Email: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="rePass"></label>
            <p class="notification"></p>
            <button>Register</button>
        </form>
    </section>
`;

export function showRegisterView() {
    renderer(temp());
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const {email, password, rePass} = Object.fromEntries(formData);

    if (!email || !password || rePass !== password) {
        return alert('Ooopps');
    }

    await userService.register({email, password});
    updateNav();
    goTo('/home');
    showCatches();
    e.target.reset();
}
