import { userUtil } from "./userUtil.js";

const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');
const emailSpan = document.querySelector('span');

export function updateNav() {
    const user = userUtil.getUserData();

    if (user) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline-block';
        emailSpan.textContent = user.email;
    } else {
        guestNav.style.display = 'inline-block';
        userNav.style.display = 'none';
        emailSpan.textContent = 'guest'
    }
}