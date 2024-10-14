import { Router } from 'express';
import productService from '../services/productService.js';
import { createErrorMsg } from '../utils/errorUtil.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const products = await productService.getAll().sort({ dateCreated: -1 }).limit(3).lean();
    
        res.render('home', { products, title: 'TechStore - Laptops and Computers' });    
    } catch (error) {
        return res.render('home', { title: 'TechStore - Laptops and Computers', error: createErrorMsg(error) });
    }
});

router.get('/about', (req, res) => {
    res.render('home/about', { title: 'TechStore - About Us' });
});

router.get('/profile', async (req, res) => {
    const userId = req.user?._id;
    
    try {
        const createdProducts = await productService.getMyProducts(userId).lean();
        const preferedProducts = await productService.getMyPrefered(userId).lean();
        
        res.render('home/profile', { createdProducts, preferedProducts, title: 'TechStore - Profile' });
    } catch (error) {
        return res.render('home/profile', { title: 'TechStore - Profile', error: createErrorMsg(error) });
    }
});

export default router;