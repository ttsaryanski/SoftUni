import { Router } from 'express';
import itemService from '../services/itemService.js';
import { createErrorMsg } from '../utils/errorUtil.js';

const router = Router();

router.get('/', async (req, res) => {

    try {
        const items = await itemService.getAll().lean();// sort!!! await itemService.getAll().sort({ dateCreated: -1 }).limit(3).lean();
    
        res.render('home', { items, title: 'Home Page' });  
    } catch (error) {
        return res.render('home', { error: createErrorMsg(error) });
    }
});

// router.get('/about', (req, res) => {
//     res.render('home/about', { title: '' });
// });

// router.get('/profile', async (req, res) => {
//     const userId = req.user?._id;
    
//     try {
//         const createdItems = await itemService.getMyItem(userId).lean();
//         const likedItems = await itemService.getMyLikes(userId).lean();
        
//         res.render('home/profile', { createdItems, likedItems, title: '' });
//     } catch (error) {
//         return res.render('home/profile', { error: createErrorMsg(error) });
//     }
// });

export default router;