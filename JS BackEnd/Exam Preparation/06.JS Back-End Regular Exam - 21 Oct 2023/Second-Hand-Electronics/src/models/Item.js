import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [10, 'Name should be at least 10 characters long!']
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        minLength: [2, 'Type should be at least 2 characters long!']
    },
    damages: {
        type: String,
        required: [true, 'Damages is required!'],
        minLength: [10, 'Damages should be at least 10 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Item image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!']
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!'],
        maxLength: [200, 'Description should be no more than 200 characters long!']
    },
    production: {
        type: Number,
        required: [true, 'Production is required!'],
        min: [1900, 'Production year cannot be before 1900!'],
        max: [2023, 'Production year cannot be after 2023!']
    },
    exploitation: {
        type: Number,
        required: [true, 'Exploitation is required!'],
        min: [0, 'Exploitation must be a positive number!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price must be a positive number!']
    },
    usersList: [{
            type: Types.ObjectId,
            ref: 'User'
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Item = model('Item', itemSchema);

export default Item;