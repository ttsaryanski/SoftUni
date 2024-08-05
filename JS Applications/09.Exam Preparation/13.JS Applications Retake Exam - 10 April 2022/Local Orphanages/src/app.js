import page from '../node_modules/page/page.mjs';
import { logout } from './utility/logout.js';
import { updateNav } from './utility/updateNav.js';
import { showCreateView } from './views/createView.js';
import { showDashboardView } from './views/dashboardView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditView } from './views/editView.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { showMyPostView } from './views/mypostView.js';
import { showRegisterView } from './views/registerView.js';
import { showSearchView } from './views/searchView.js';

showDashboardView
page('/', showDashboardView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logout);
page('/dashboard', showDashboardView);
page('/creat', showCreateView);
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView)
page('/mypost', showMyPostView);

page.start();
updateNav();
