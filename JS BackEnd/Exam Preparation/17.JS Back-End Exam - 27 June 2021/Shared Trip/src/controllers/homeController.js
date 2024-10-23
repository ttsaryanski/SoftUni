import { Router } from 'express';

import { createErrorMsg } from '../utils/errorUtil.js';
import authService from '../services/authService.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', async (req, res) => {
    const sessionError = req.session.error;
    req.session.error = null;

    res.render('home', { title: 'Home Page', error: createErrorMsg(null, sessionError) });
});

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user?._id;

    try {
        const user = await authService.getUserById(userId).lean();
        const isMale = user.gender === 'male';

        res.render('home/profile', { user, isMale, title: 'Profile Page' });
    } catch (error) {
        return res.render('home/profile', { title: 'Profile Page', error: createErrorMsg(error, null) });
    }
});

export default router;