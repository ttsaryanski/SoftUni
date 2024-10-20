import { Router } from 'express';

import itemService from '../services/itemService.js';
import { createErrorMsg } from '../utils/errorUtil.js';
import authService from '../services/authService.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', async (req, res) => {
    const email = req.user?.email

    try {
        const sessionError = req.session.error;
        req.session.error = null;

    
        res.render('home', { title: 'Home Page', email, error: createErrorMsg(null, sessionError) });  
    } catch (error) {
        return res.render('home', { title: 'Home Page', email, error: createErrorMsg(error, null) });
    }
});

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user?._id;
    const email = req.user?.email;
    
    try {
        const user = await authService.getUserById(userId).lean();
        const itemsIds = user.myPosts;
        const items = await itemService.getAllByIds(itemsIds).lean();

        res.render('home/myPosts', { email, items, title: 'My Posts' });
    } catch (error) {
        return res.render('home/myPosts', { email, title: 'My Posts', error: createErrorMsg(error, null) });
    }
});

export default router;