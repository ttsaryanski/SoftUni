import { Schema, model, Types } from 'mongoose';

const productSchema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required!'],
        minLength: [2, 'Brand should be at least 2 characters long!']
    },
    model: {
        type: String,
        required: [true, 'Model is required!'],
        minLength: [5, 'Model should be at least 5 characters long!']
    },
    harddisk: {
        type: String,
        required: [true, 'Hard disk is required!'],
        minLength: [5, 'Hard disk should be at least 5 characters long!']
    },
    screensize: {
        type: String,
        required: [true, 'Screen size is required!'],
        minLength: [1, 'Screen size should be at least 1 characters long!']
    },
    ram: {
        type: String,
        required: [true, 'Ram is required!'],
        minLength: [2, 'Ram should be at least 2 characters long!']
    },
    os: {
        type: String,
        required: [true, 'OS is required!'],
        minLength: [5, 'OS should be at least 5 characters long!'],
        maxLength: [20, 'OS should be no more than 20 characters long!']
    },
    cpu: {
        type: String,
        required: [true, 'CPU is required!'],
        minLength: [10, 'CPU should be at least 10 characters long!'],
        maxLength: [50, 'CPU should be no more than 50 characters long!']
    },
    gpu: {
        type: String,
        required: [true, 'GPU is required!'],
        minLength: [10, 'GPU should be at least 10 characters long!'],
        maxLength: [50, 'GPU should be no more than 50 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price must be a positive number!']
    },
    color: {
        type: String,
        required: [true, 'Color is required!'],
        minLength: [2, 'Color should be at least 2 characters long!'],
        maxLength: [10, 'Color should be no more than 10 characters long!']
    },
    weight: {
        type: String,
        required: [true, 'Weight size is required!'],
        minLength: [1, 'Weight size should be at least 1 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Movie image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!']
    },
    preferedList: [{
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

const Product = model('Product', productSchema);

export default Product;