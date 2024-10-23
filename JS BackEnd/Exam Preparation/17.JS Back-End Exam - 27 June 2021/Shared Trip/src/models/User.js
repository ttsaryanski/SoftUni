import { Schema, model, Types } from "mongoose";
import bcrypt from 'bcrypt';

import { SALT_ROUNDS } from "../config/constans.js";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        validate: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/, 'Invalid email format!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password should be at least 4 characters long!']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required!'],
        enum: {
            values: ["male", "female"],
            message: 'You can only use the ones listed!'
        }
    },
    itemsList: [{
        type: Types.ObjectId,
        ref: 'Item'
    }]
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;