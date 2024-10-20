import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import { authMiddleware } from '../middlewares/authMiddleware.js';
import { SESSION_SECRET } from '../config/constans.js';

export default function expressInit(app) {
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));
    app.use(authMiddleware);
};