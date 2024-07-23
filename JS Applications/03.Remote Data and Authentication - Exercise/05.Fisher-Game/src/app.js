import page from '../node_modules/page/page.mjs';
import { logout } from './utility/logout.js';
import { updateNav } from './utility/updateNav.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { showRegisterView } from './views/registerView.js';

showHomeView();
page('/', showHomeView);
page('/home', showHomeView);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', logout);

page.start();
updateNav();
