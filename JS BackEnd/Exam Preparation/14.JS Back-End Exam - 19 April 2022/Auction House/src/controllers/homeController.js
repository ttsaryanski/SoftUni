import { Router } from 'express';

import itemService from '../services/itemService.js';
import { createErrorMsg } from '../utils/errorUtil.js';
import authService from '../services/authService.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', async (req, res) => {
    const sessionError = req.session.error;
    req.session.error = null;

    res.render('home', { title: 'Auction House', error: createErrorMsg(null, sessionError) });
});

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user?._id;

    try {
        const closedItems = await itemService.getAllClosed(userId).lean();

        res.render('home/profile', { closedItems, title: 'Closed Auctions' });
    } catch (error) {
        return res.render('home/profile', { title: 'Closed Auctions', error: createErrorMsg(error, null) });
    }
});

export default router;