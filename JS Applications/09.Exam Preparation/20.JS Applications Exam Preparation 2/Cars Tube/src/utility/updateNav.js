import { userUtil } from "./userUtil.js";

const userNav = document.getElementById('profile');
const guestNav = document.getElementById('guest');
const welcomeText = userNav.querySelector('a')

export function updateNav() {
    const user = userUtil.getUserData();

    if (user) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
        welcomeText.textContent = `Welcome ${user.username}`;
        welcomeText.style.display = 'inline-block';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
        welcomeText.style.display = 'none';
    }
}