import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    startPoint: {
        type: String,
        required: [true, 'Start point is required!'],
        minLength: [4, 'Start point should be at least 4 characters long!']
    },
    endPoint: {
        type: String,
        required: [true, 'End point is required!'],
        minLength: [4, 'End point should be at least 4 characters long!']
    },
    date: {
        type: String,
        required: [true, 'Date is required!']
    },
    time: {
        type: String,
        required: [true, 'Time is required!']
    },
    carBrand: {
        type: String,
        required: [true, 'Car brand is required!'],
        minLength: [4, 'Car brand should be at least 4 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [1, 'The minimum price cannot be less than 1!'],
        max: [50, 'The maximum price cannot be more than 50!']
    },
    seats: {
        type: Number,
        required: [true, 'Seats is required!'],
        min: [0, 'Seats must be a positive number!'],
        max: [4, 'Seats cannot be more than 4']
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Car image is required!'],
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