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

        const items = await itemService.getAllOpened().lean();
    
        res.render('item/catalog', { items, title: 'Browse Auctions', error: createErrorMsg(null, sessionError) });    
    } catch (error) {
        return res.render('item/catalog', { title: 'Browse Auctions', error: createErrorMsg(error, null) });
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('item/create', { title: 'Publish Auction'});
});

router.post('/create', isAuth, async (req, res) => {
    const item = req.body;
    const ownerId = req.user?._id;

    try {
        await itemService.create(item, ownerId);
    
        res.redirect('/item/catalog');
    } catch (error) {
        return res.render('item/create', { item, title: 'Publish Auction', error: createErrorMsg(error, null) });
    }
});

router.get('/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {
        const item = await itemService.getById(itemId).lean();
        const isOwner = item.owner._id && item.owner._id == req.user?._id;
        const isLiked = item.usersList?._id && item.usersList?._id == req.user?._id;
    
        res.render('item/details', { item, isOwner, isLiked, title: 'Auction Details' }); // Remove the excess!!!
    } catch (error) {
        return res.render('item/details', { title: 'Auction Details', error: createErrorMsg(error, null) });
    }
});

router.post('/:itemId/details', checkIsLiked, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;
    const item = req.body;
    const newPrice = item.price;
    

    try {
        const item = await itemService.getById(itemId).lean();
        const isOwner = item.owner._id && item.owner._id == req.user?._id;
        const isLiked = item.usersList?._id && item.usersList?._id == req.user?._id;
        
        if (newPrice <= item.price) {
            return res.render('item/details', { item, isOwner, isLiked, newPrice, title: 'Auction Details', error: 'The proposed price must be greater than the current price!' });
        }

        item.price = newPrice;
        await itemService.edit(itemId, item);
        await itemService.like(itemId, userId);

        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        return res.render('item/details', { title: 'Auction Details', error: createErrorMsg(error, null) });
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
    
        res.render('item/edit', { item, title: 'Edit Auction' });
    } catch (error) {
        return res.render('item/edit', { title: 'Edit Auction', error: createErrorMsg(error, null) });
    }
});

router.post('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {
        await itemService.edit(itemId, item);
    
        res.redirect(`/item/${itemId}/details`);
    } catch (error) {
        return res.render('item/edit', { item, title: 'Edit Auction', error: createErrorMsg(error, null) });
    }
});

router.get('/:itemId/close', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId;

    try {
        await itemService.close(itemId);

        res.redirect('/profile');
    } catch (error) {
        req.session.error = 'Operation failed!';

        return res.redirect('item/catalog');
    }
});

export default router;
