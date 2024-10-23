import { Router } from "express";

import authService from "../services/authService.js";
import { createErrorMsg } from '../utils/errorUtil.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

router.post('/register', isGuest, async (req, res) => {
    const { gender, email, password, rePassword } = req.body;

    if (rePassword !== password) {
        return res.render('auth/register', { gender, email, title: 'Register Page', error: 'Password missmatch!' });
    }

    try {
        await authService.register(gender, email, password);

        const token = await authService.login(email, password);
        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/');
    } catch (error) {
        return res.render('auth/register', { gender, email, title: 'Register Page', error: createErrorMsg(error, null) });
    }
});

router.get('/login', isGuest, (req, res) => {
    const sessionError = req.session.error;
    req.session.error = null;

    res.render('auth/login', { title: 'Login Page', error: createErrorMsg(null, sessionError) });
});

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token, { httpOnly: true });
        
        res.redirect('/');
    } catch (error) {
        return res.render('auth/login', { email, title: 'Login Page', error: createErrorMsg(error, null)});
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
});

export default router;