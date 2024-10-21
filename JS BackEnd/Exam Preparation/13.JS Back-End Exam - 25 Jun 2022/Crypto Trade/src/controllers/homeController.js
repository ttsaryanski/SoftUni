import { Router } from 'express';

import { createErrorMsg } from '../utils/errorUtil.js';

const router = Router();

router.get('/', async (req, res) => {
    const sessionError = req.session.error;
    req.session.error = null;
    
    res.render('home', { title: 'Home Page - Crypto Web', error: createErrorMsg(null, sessionError) });  
    
});

export default router;