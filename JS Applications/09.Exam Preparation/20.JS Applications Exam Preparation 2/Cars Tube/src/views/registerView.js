import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import {createSubmitHandler} from '../utility/submiter.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { updateNav } from '../utility/updateNav.js'

const temp = (handler) => html`
    <!-- Register Page -->
    <section id="register">
        <div class="container">
            <form @submit=${handler} id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>
`;

export function showRegisterView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {username, password, repeatPass} = data;
    if (!username || !password || repeatPass !== password) {
        return alert('Oops');
    }

    await userService.register({username, password});
    updateNav();
    goTo('/dashboard');
    formRef.reset();
}
