import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters long!']
    },
    category : {
        type: String,
        required: [true, 'Category is required!'],
        minLength: [3, 'Category should be at least 3 characters long!']
    },
    color : {
        type: String,
        required: [true, 'Color is required!'],
        minLength: [2, 'Color should be at least 2 characters long!']
    },
    location : {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Location should be at least 5 characters long!'],
        maxLength: [15, 'Location should be no more than 15 characters long!']
    },
    formula : {
        type: String,
        required: [true, 'Formula is required!'],
        minLength: [3, 'Formula should be at least 3 characters long!'],
        maxLength: [30, 'Formula should be no more than 30 characters long!']
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Mineral or gems image is required!'],
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