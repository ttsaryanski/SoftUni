import page from '../node_modules/page/page.mjs';
import { logout } from './utility/logout.js';
import { updateNav } from './utility/updateNav.js';
import { showAddView } from './views/addCarView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditView } from './views/editCarView.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { showAllCars } from './views/ourCarsView.js';
import { showRegisterView } from './views/registerView.js';
import { showSearchView } from './views/searchView.js';

showHomeView();
page('/', showHomeView);
page('/ourCars', showAllCars);
page('/register', showRegisterView);
page('/login', showLoginView);
page('/logout', logout);
page('/addCar', showAddView);
page('/search', showSearchView);
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView)

page.start();
updateNav();