import { Router } from "express";

import productService from "../services/productService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { checkOwner, checkNotOwner } from '../middlewares/ownerMiddleware.js';
import { createErrorMsg } from "../utils/errorUtil.js";

const router = Router();

router.get('/catalog', async (req, res) => {
    try {
        const products = await productService.getAll().lean();
    
        res.render('product/catalog', { products,  isCatalog: true, title: 'TechStore - Product Catalog' });    
    } catch (error) {
        return res.render('product/catalog', { isCatalog: true, error: createErrorMsg(error) });
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('product/create', { title: 'TechStore - Create Product'})
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;

    try {
        await productService.create(data, ownerId);
        
        res.redirect('/device/catalog');
    } catch (error) {
        return res.render('product/create', { data, error: createErrorMsg(error) });
    }
});

router.get('/:productId/details', async (req, res) => {
    const productId = req.params.productId;
    const userId = req.user?._id;

    try {
        const product = await productService.getById(productId).lean();
        const isOwner = product.owner && product.owner == req.user?._id;
        const isPrefer = !!(await productService.checkIsPrefer(productId, userId));
        
        res.render('product/details', { product, isOwner, isPrefer, title: 'TechStore - Laptop Details' });
    } catch (error) {
        return res.render('product/details', { error: createErrorMsg(error) });
    }
});

router.get('/:productId/delete', isAuth, checkOwner, async (req, res) => {
    const productId = req.params.productId;

    try {
        await productService.remove(productId);
        res.redirect('/device/catalog');
    } catch (error) {
        return res.render('product/details', { error: createErrorMsg(error) });
    }
});

router.get('/:productId/edit', isAuth, checkOwner, async (req, res) => {
    const productId = req.params.productId;

    try {
        const product = await productService.getById(productId).lean();
    
        res.render('product/edit', { product, title: 'TechStore - Edit Product' });
    } catch (error) {
        return res.render('product/edit', { error: createErrorMsg(error) });
    }
});

router.post('/:productId/edit', isAuth, checkOwner, async (req, res) => {
    const productId = req.params.productId;
    const product = req.body;

    try {
        await productService.edit(productId, product);
        
        res.redirect(`/device/${productId}/details`);
    } catch (error) {
        return res.render('product/edit', { product, error: createErrorMsg(error) });
    }
});

router.get('/:productId/prefer', isAuth, checkNotOwner, async (req, res) => {
    const productId = req.params.productId;
    const userId = req.user._id;

    try {
        await productService.prefer(productId, userId);

        res.redirect(`/device/${productId}/details`);
    } catch (error) {
        return res.render(`product/details`, { error: createErrorMsg(error) });
    }
});

export default router;