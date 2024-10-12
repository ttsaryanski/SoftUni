import { Router } from "express";

import itemService from "../services/itemService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { checkOwner, checkNotOwner } from '../middlewares/ownerMiddleware.js';
import { createErrorMsg } from "../utils/errorUtil.js";

const router = Router();

router.get('/catalog', async (req, res) => {
    try {
        const items = await itemService.getAll().lean();
    
        res.render('item/catalog', { items, title: 'Recipe Catalog - Home Cooking Recipes' });    
    } catch (error) {
        return res.render('home', { isCatalog: true, error: createErrorMsg(error) });
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('item/create', { title: 'Create Recipe - Home Cooking Recipes'});
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;

    try {
        await itemService.create(data, ownerId);
    
        res.redirect('/'); // catalog?
    } catch (error) {
        return res.render('item/create', { data, error: createErrorMsg(error) });
    }
});

router.get('/search', async (req, res) => {
    const query = req.query;

    try {
        const items = await itemService.getAll(query).lean(); // sort()
    
        res.render('item/search', { items, query, title: 'Search Recipes - Home Cooking Recipes' }); 
    } catch (error) {
        return res.render('item/search', { error: createErrorMsg(error)});
    }
});

router.get('/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        const item = await itemService.getById(itemId).lean();
        const isOwner = item.owner && item.owner == req.user?._id;
        const isLiked = !!(await itemService.checkIsLiked(itemId, userId));
    
        res.render('item/details', { item, isOwner, isLiked, title: `${item.title} - Home Cooking Recipes` });
    } catch (error) {
        return res.render('item/details', { error: createErrorMsg(error) });
    }
});

router.get('/:itemId/delete', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;

    try {
        await itemService.remove(itemId);
    
        res.redirect('/'); // catalog?
    } catch (error) {
        return res.render('item/details', { error: createErrorMsg(error) });
    }
});

router.get('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;

    try {
        const item = await itemService.getById(itemId).lean();
    
        res.render('item/edit', { item, title: 'Edit Recipe - Home Cooking Recipes' });
    } catch (error) {
        return res.render('item/edit', { error: createErrorMsg(error) });
    }
});

router.post('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {
        await itemService.edit(itemId, item);
    
        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        return res.render('item/edit', { item, error: createErrorMsg(error) });
    }
});

router.get('/:itemId/like', isAuth, checkNotOwner, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        await itemService.like(itemId, userId);

        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        return res.render(`item/details`, { error: createErrorMsg(error) });
    }
});

export default router;