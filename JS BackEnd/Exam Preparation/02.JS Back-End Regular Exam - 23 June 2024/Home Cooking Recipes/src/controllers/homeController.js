import { Router } from 'express';
import itemService from '../services/itemService.js';
import { createErrorMsg } from '../utils/errorUtil.js';

const router = Router();

router.get('/', async (req, res) => {

    try {
        const items = await itemService.getAll().sort({ dateCreated: -1 }).limit(3).lean();
    
        res.render('home', { items, title: 'Home Cooking Recipes' });  
    } catch (error) {
        return res.render('home', { error: createErrorMsg(error) });
    }
});

export default router;