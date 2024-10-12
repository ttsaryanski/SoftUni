import { Router } from 'express';
import homeController from './controllers/homeController.js';
import itemControler from './controllers/itemController.js';
import authController from './controllers/authController.js';

const routes = Router();

routes.use(homeController);
routes.use('/item', itemControler);
routes.use('/auth', authController);

routes.use('*', (req, res) => {
    res.render('404', { title: 'Page Not Found - Home Cooking Recipes'});
})

export default routes;