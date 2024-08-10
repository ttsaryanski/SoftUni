import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { updateNav } from '../utility/updateNav.js';

const temp = (handler) => html`
    <!-- Login Page -->
    <section id="login">
        <div class="container">
            <form @submit=${handler} id="login-form" action="#" method="post">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
`;

export function showLoginView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {username, password} = data;
    if (!username || !password) {
        return alert('Oops');
    }

    await userService.login({username, password})
    updateNav();
    goTo('/dashboard');
    formRef.reset();
}
