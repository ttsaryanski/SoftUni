import bcrypt from 'bcrypt';

import jwt from '../lib/jwt.js';
import User from "../models/User.js";
import { JWT_SECRET } from '../config/constans.js';


const register = async (gender, email, password) => {
    const user = await User.findOne({ email });

    if (user) {
        throw new Error("This email already registered!");
    }

    return User.create({ gender, email, password });
}

const login = async (email, password) => {
    const user = await User.findOne({ email });
    const gender = user?.gender;

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
        gender
    };
    
    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '2h'});

    return token;
};
  
const getUserById = (id) => User.findById(id).populate('itemsList');

const getAllUsersByIds = async (ids) => {
    let users = await User.find({ _id: { $in: ids } }).select('email');
    users = users.map(user => user.email);
    return users;
};

export default {
    register,
    login,
    getUserById,
    getAllUsersByIds
};