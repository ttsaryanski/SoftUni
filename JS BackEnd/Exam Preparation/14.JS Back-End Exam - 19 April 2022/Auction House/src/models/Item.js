import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [4, 'Title should be at least 4 characters long!']
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [200, 'Description should be no more than 200 characters long!']
    },
    category : {
        type: String,
        required: [true, 'Category is required!'],
        enum: {
            values: ["Vehicles", "Real Estate", "Electronics", "Furniture", "Other"],
            message: 'You can only use the ones listed!'
        }
    },
    imageUrl: {
        type: String,
        required: [true, 'Product image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price must be a positive number!']
    },
    usersList: {
            type: Types.ObjectId,
            ref: 'User'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    isClosed: {
        type: Boolean,
        default: false
    }
});

const Item = model('Item', itemSchema);

export default Item;