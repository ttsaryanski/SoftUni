import { Router } from "express";

import itemService from "../services/itemService.js";
import authService from "../services/authService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { checkOwner, checkNotOwner, checkIsLiked } from '../middlewares/checkUserPermission.js';
import { createErrorMsg } from "../utils/errorUtil.js";

const router = Router();

router.get('/catalog', async (req, res) => {
    const email = req.user?.email;

    try {
        const sessionError = req.session.error;
        req.session.error = null;

        const items = await itemService.getAll().lean();
    
        res.render('item/catalog', { items, email, title: 'Catalog Page', error: createErrorMsg(null, sessionError) });    
    } catch (error) {
        return res.render('item/catalog', { email, title: 'Catalog Page', error: createErrorMsg(error, null) });
    }
});

router.get('/create', isAuth, (req, res) => {
    const email = req.user?.email;

    res.render('item/create', { email, title: 'Create Page'});
});

router.post('/create', isAuth, async (req, res) => {
    const email = req.user?.email;
    const item = req.body;
    const ownerId = req.user?._id;

    try {
        await itemService.create(item, ownerId);
    
        res.redirect('/item/catalog');
    } catch (error) {
        return res.render('item/create', { item, email, title: 'Create Page', error: createErrorMsg(error, null) });
    }
});

router.get('/:itemId/details', async (req, res) => {
    const email = req.user?.email;
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        const item = await itemService.getById(itemId).lean();
        const isOwner = item.autor && item.autor == req.user?._id;
        const isLiked = item.usersList.some(id => id == userId);

        const autor = await authService.getUserById(item.autor).lean();
        const autorNames = `${autor.firstName} ${autor.lastName}`;

        const users = await authService.getAllUsersByIds(item.usersList);
        const usersList = users.join(', ');
    
        res.render('item/details', { email, item, isOwner, isLiked, autorNames, users, usersList, title: 'Details Page' }); // Remove the excess!!!
    } catch (error) {
        return res.render('item/details', { title: 'Details Page', error: createErrorMsg(error, null) });
    }
});

router.get('/:itemId/delete', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        await itemService.remove(itemId, userId);
    
        res.redirect('/item/catalog');
    } catch (error) {
        req.session.error = 'Operation failed!';

        return res.redirect('/item/catalog');
    }
});

router.get('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const email = req.user?.email;
    const itemId = req.params.itemId;

    try {
        const item = await itemService.getById(itemId).lean();
    
        res.render('item/edit', { item, email, title: 'Edit Page' });
    } catch (error) {
        return res.render('item/edit', { email, title: 'Edit Page', error: createErrorMsg(error, null) });
    }
});

router.post('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const email = req.user?.email;
    const itemId = req.params.itemId;
    const item = req.body;

    try {
        await itemService.edit(itemId, item);
    
        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        return res.render('item/edit', { email, item, title: 'Edit Page', error: createErrorMsg(error, null) });
    }
});

router.get('/:itemId/upLike', isAuth, checkNotOwner, checkIsLiked, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        await itemService.upLike(itemId, userId);

        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        req.session.error = 'Operation failed!';

        return res.redirect('item/catalog');
    }
});

router.get('/:itemId/downLike', isAuth, checkNotOwner, checkIsLiked, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        await itemService.downLike(itemId, userId);

        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        req.session.error = 'Operation failed!';

        return res.redirect('item/catalog');
    }
});

export default router;
