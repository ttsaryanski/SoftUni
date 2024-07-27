import page from '../node_modules/page/page.mjs';
import { logout } from './utility/logout.js';
import { updateNav } from './utility/updateNav.js';
import { showCreatView } from './views/createView.js';
import { showDashboardView } from './views/dashboardView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditView } from './views/editView.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { showRegisterView } from './views/registerView.js';

showHomeView();
page('/', showHomeView);
page('/dashboard', showDashboardView);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', logout);
page('/add', showCreatView);
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView)
// page('/search', () => console.log('search'));

page.start();
updateNav();


