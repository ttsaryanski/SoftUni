import { userUtil } from "./userUtil.js";

const userNav = document.querySelector('nav .user');
const guestNav = document.querySelector('nav .guest');

export function updateNav() {
    const user = userUtil.getUserData();

    if (user) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
        
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
        
    }
}