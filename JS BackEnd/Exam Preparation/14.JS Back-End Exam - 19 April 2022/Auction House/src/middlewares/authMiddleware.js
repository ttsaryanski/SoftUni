import jwt from '../lib/jwt.js';

import { JWT_SECRET } from '../config/constans.js';

const authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    };

    try {
        const decodedToken = await jwt.verify(token, JWT_SECRET);

        const user = {
            _id: decodedToken._id,
            email: decodedToken.email,
            firstName: decodedToken.firstName, 
lastName: decodedTocen.lastName
        };

        req.user = user;
        req.isAuthenticated = true;
        res.locals.userId = user._id;
        res.locals.userFirsttName = user.firstName;
res.locals.userLastName = user.lastName;
        res.locals.userEmail = user.email;
        res.locals.isAuthenticated = true;
        
        return next();
    } catch (error) {
        req.session.error = 'This action is for authorized users only!';

        res.clearCookie('auth');

        res.redirect('/auth/login');
    };
    
};

const isAuth = (req, res, next) => {
    if (!req.isAuthenticated) {
        req.session.error = 'This action is for authorized users only!';

        return res.redirect('/auth/login');
    }

    return next();
};

const isGuest = (req, res, next) => {
    if (!req.isAuthenticated) {
        return next();
    }
    req.session.error = 'You are already registered and logged!';
    
    return res.redirect('/');;
}

export {
    authMiddleware,
    isAuth,
    isGuest
};