import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { updateNav } from '../utility/updateNav.js';

const temp = (handler) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form @submit=${handler} class="login-form">
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
        </div>
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
