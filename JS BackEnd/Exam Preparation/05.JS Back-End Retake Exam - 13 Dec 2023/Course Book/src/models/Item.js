import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title should be at least 5 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price must be a positive number!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!']
    },
    certificate: {
        type: String,
        required: [true, 'Certificate is required!'],
        minLength: [2, 'Certificate should be at least 2 characters long!']
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        minLength: [3, 'Type should be at least 3 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Course image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!']
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