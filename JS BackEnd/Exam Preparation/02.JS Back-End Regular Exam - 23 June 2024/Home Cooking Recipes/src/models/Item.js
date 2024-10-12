import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [2, 'Title should be at least 2 characters long!']
    },
    ingredients: {
        type: String,
        required: [true, 'ingredients is required!'],
        minLength: [10, 'ingredients should be at least 10 characters long!'],
        maxLength: [200, 'ingredients should be no more than 200 characters long!']
    },
    instructions: {
        type: String,
        required: [true, 'instructions is required!'],
        minLength: [10, 'instructions should be at least 10 characters long!']
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!'],
        maxLength: [100, 'Description should be no more than 100 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Dish image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!']
    },
    usersList: [{
        user: {
            type: Types.ObjectId,
            ref: 'User'
        }
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