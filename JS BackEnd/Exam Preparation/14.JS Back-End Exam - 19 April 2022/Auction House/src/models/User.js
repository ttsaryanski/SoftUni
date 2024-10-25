import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

import { SALT_ROUNDS } from "../config/constans.js";

const userSchema = new Schema({
    firstName: {
        type:String,
        required: [true, 'First name is required!'],
        minLength: [1, 'First name should be at least 1 characters long!']
    },
    lastName: {
        type:String,
        required: [true, 'Last name is required!'],
        minLength: [1, 'Last name should be at least 1 characters long!']
    },
    email: {
        type:String,
        unique: true,
        required: [true, 'Email is required!'],
        validate: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/, 'Invalid email address!'],
    },
    password: {
        type:String,
        required: [true, 'Password is required!'],
        minLength: [5, 'Password should be at least 5 characters long!']
    }
});

userSchema.pre('save', async function () {
    const hash =  await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;