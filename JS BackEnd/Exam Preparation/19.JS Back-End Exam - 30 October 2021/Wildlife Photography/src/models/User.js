import { Schema, model, Types } from "mongoose";
import bcrypt from 'bcrypt';

import { SALT_ROUNDS } from "../config/constans.js";

const userSchema = new Schema({
    firstName: {
        type:String,
        required: [true, 'First name is required!'],
        minLength: [3, 'First name should be at least 3 characters long!'],
        validate: [/^[A-Za-z]+$/, 'Firs name can contain only English letters!']
    },
    lastName: {
        type:String,
        required: [true, 'Last name is required!'],
        minLength: [5, 'Last name should be at least 5 characters long!'],
        validate: [/^[A-Za-z]+$/, 'Last name can contain only English letters!']
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
        minLength: [4, 'Password should be at least 4 characters long!']
    },
    myPosts: [{
        type: Types.ObjectId,
        ref: 'Item'
}],
});

userSchema.pre('save', async function () {
    const hash =  await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;