import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import {createSubmitHandler} from '../utility/submiter.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { updateNav } from '../utility/updateNav.js'

const temp = (handler) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register-page" class="auth">
        <form @submit=${handler} id="register">
            <h1 class="title">Register</h1>
            <article class="input-group">
                <label for="register-email">Email: </label>
                <input type="email" id="register-email" name="email">
            </article>
            <article class="input-group">
                <label for="register-password">Password: </label>
                <input type="password" id="register-password" name="password">
            </article>
            <article class="input-group">
                <label for="repeat-password">Repeat Password: </label>
                <input type="password" id="repeat-password" name="repeatPassword">
            </article>
            <input type="submit" class="btn submit-btn" value="Register">
        </form>
    </section>
`;

export function showRegisterView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {email, password, rePass = data['repeatPassword']} = data;
    if (!email || !password || rePass !== password) {
        return alert('Oops');
    }

    await userService.register({email, password});
    updateNav();
    goTo('/dashboard');
    formRef.reset();
}
