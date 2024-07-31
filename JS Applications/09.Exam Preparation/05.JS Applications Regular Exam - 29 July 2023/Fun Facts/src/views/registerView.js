import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import {createSubmitHandler} from '../utility/submiter.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { updateNav } from '../utility/updateNav.js'

const temp = (handler) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form @submit=${handler} class="register-form">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;

export function showRegisterView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {email, password, rePass = data['re-password']} = data;
    if (!email || !password || rePass !== password) {
        return alert('Oops');
    }

    await userService.register({email, password});
    updateNav();
    goTo('/');
    formRef.reset();
}
