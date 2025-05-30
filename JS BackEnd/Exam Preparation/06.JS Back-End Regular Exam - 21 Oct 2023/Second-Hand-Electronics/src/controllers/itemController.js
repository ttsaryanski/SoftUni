import { Router } from "express";

import itemService from "../services/itemService.js";
import authService from "../services/authService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { checkOwner, checkNotOwner, checkIsLiked } from '../middlewares/checkUserPermission.js';
import { createErrorMsg } from "../utils/errorUtil.js";

const router = Router();

router.get('/catalog', async (req, res) => {
    try {
        const sessionError = req.session.error;
        req.session.error = null;

        const items = await itemService.getAll().lean();
    
        res.render('item/catalog', { items, error: createErrorMsg(null, sessionError) });    
    } catch (error) {
        return res.render('item/catalog', { error: createErrorMsg(error, null) });
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('item/create');
});

router.post('/create', isAuth, async (req, res) => {
    const item = req.body;
    const ownerId = req.user?._id;

    try {
        await itemService.create(item, ownerId);
    
        res.redirect('/item/catalog');
    } catch (error) {
        return res.render('item/create', { item, error: createErrorMsg(error, null) });
    }
});

router.get('/search', async (req, res) => {
    const query = req.query;

    try {
        const items = await itemService.getAll(query).lean();
    
        res.render('item/search', { items, query }); 
    } catch (error) {
        return res.render('item/search', { error: createErrorMsg(error, null)});
    }
});

router.get('/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        const item = await itemService.getById(itemId).lean();
        const isOwner = item.owner && item.owner == req.user?._id;
        const isLiked = item.usersList.some(user => user._id == userId);

        const owner = await authService.getUserById(item.owner);
        const users = await authService.getAllUsersByIds(item.usersList);
        const usersList = users.join(', ');
    
        res.render('item/details', { item, isOwner, isLiked, owner, users, usersList }); // Remove the excess!!!
    } catch (error) {
        return res.render('item/details', { error: createErrorMsg(error, null) });
    }
});

router.get('/:itemId/delete', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;

    try {
        await itemService.remove(itemId);
    
        res.redirect('/item/catalog');
    } catch (error) {
        req.session.error = 'Operation failed!';

        return res.redirect('/item/catalog');
    }
});

router.get('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;

    try {
        const item = await itemService.getById(itemId).lean();
    
        res.render('item/edit', { item });
    } catch (error) {
        return res.render('item/edit', { error: createErrorMsg(error, null) });
    }
});

router.post('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {
        await itemService.edit(itemId, item);
    
        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        return res.render('item/edit', { item, error: createErrorMsg(error, null) });
    }
});

router.get('/:itemId/like', isAuth, checkNotOwner, checkIsLiked, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        await itemService.like(itemId, userId);

        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        req.session.error = 'Operation failed!';

        return res.redirect('item/catalog');
    }
});

export default router;
