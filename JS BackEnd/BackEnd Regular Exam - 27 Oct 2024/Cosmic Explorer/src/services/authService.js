import bcrypt from 'bcrypt';

import jwt from '../lib/jwt.js';
import User from "../models/User.js";
import { JWT_SECRET } from '../config/constans.js';


const register = async (name, email, password) => {
    const user = await User.findOne({ name });

    if (user) {
        throw new Error("This name already registered!");
    }

    return User.create({ name, email, password });
}

const login = async (name, password) => {
    const user = await User.findOne({ name });
    const email = user?.email;

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
        name
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