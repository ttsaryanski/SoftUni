import { Router } from 'express';

import itemService from '../services/itemService.js';
import { createErrorMsg } from '../utils/errorUtil.js';
import authService from '../services/authService.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', async (req, res) => {
    
    try {
        const sessionError = req.session.error;
        req.session.error = null;

        const items = await itemService.getAll().sort({ dateCreated: -1 }).limit(3).lean();
    
        res.render('home', { items, title: 'Home Page', error: createErrorMsg(null, sessionError) });  
    } catch (error) {

        return res.render('home', { title: 'Home Page', error: createErrorMsg(error, null) });
    }
});

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user?._id;
    
    try {
        const createdItems = await itemService.getMyItem(userId).lean();
        const likedItems = await itemService.getMyLikes(userId).lean();
        const user = await authService.getUserById(userId);
        
        res.render('home/profile', { user, createdItems, likedItems, title: 'Profile Page' });
    } catch (error) {
        return res.render('home/profile', { title: 'Profile Page', error: createErrorMsg(error, null) });
    }
});

export default router;