import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { updateNav } from '../utility/updateNav.js';

const temp = (handler) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login-page" class="auth">
        <form @submit=${handler} id="login">
            <h1 class="title">Login</h1>
            <article class="input-group">
                <label for="login-email">Email: </label>
                <input type="email" id="login-email" name="email">
            </article>
            <article class="input-group">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password">
            </article>
            <input type="submit" class="btn submit-btn" value="Log In">
        </form>
    </section>
`;

export function showLoginView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {email, password} = data;
    if (!email || !password) {
        return alert('Oops');
    }

    await userService.login({email, password})
    updateNav();
    goTo('/dashboard');
    formRef.reset();
}
