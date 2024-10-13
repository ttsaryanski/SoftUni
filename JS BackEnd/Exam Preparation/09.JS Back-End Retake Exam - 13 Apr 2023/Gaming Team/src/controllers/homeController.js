import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {

    res.render('home', { title: 'Home Page - Gaming Team' });  
    
});

export default router;