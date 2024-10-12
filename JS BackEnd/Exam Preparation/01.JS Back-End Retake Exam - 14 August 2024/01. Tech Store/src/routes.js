import { Router } from 'express';
import homeController from './controllers/homeController.js';
import productController from './controllers/productController.js'
import authController from './controllers/authController.js';

const router = Router();

router.use(homeController);
router.use('/device', productController);
router.use('/auth', authController);

router.use('*', (req, res) => {
    res.render('404', { title: 'TechStore - Page Not Found' });
})

export default router;