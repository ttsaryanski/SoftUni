import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price must be a positive number!']
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!']
    },
    paymentMethod : {
        type: String,
        required: [true, 'Payment method is required!'],
        enum: {
            values: ["Crypto Wallet", "Credit Card", "Debit Card", "PayPal"],
            message: 'You can only use the ones listed!'
        }
    },
    imageUrl: {
        type: String,
        required: [true, 'Crypto image is required!'],
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