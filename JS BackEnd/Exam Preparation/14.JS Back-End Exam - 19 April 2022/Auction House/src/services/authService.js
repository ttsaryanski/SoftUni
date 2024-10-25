import bcrypt from 'bcrypt';

import jwt from '../lib/jwt.js';
import User from "../models/User.js";
import { JWT_SECRET } from '../config/constans.js';


const register = async (firstName, lastName, email, password) => {
    const user = await User.findOne({ email });

    if (user) {
        throw new Error("This email already registered!");
    }

    return User.create({ firstName, lastName, email, password });
}

const login = async (email, password) => {
    const user = await User.findOne({ email });
    const firstName = user?.firstName;
    const lastName = user?.lastName;

    if (!user) {
        throw new Error('User does not exist!');
    };

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Password does not match!');
    };

    const payload = {
        _id: user._id,
        email,
        firstName,
        lastName
    };
    
    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '2h'});

    return token;
};
  
const getUserById = async (id) => {
    const user = await User.findById(id).lean();

    return user.email;
};

const getAllUsersByIds = async (ids) => {
    let users = await User.find({ _id: { $in: ids } }).select('name');
    users = users.map(user => user.name);
    return users;
};

export default {
    register,
    login,
    getUserById,
    getAllUsersByIds
};