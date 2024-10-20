import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [6, 'Title should be at least 6 characters long!']
    },
    keyword: {
        type: String,
        required: [true, 'Keylord is required!'],
        minLength: [6, 'Keylord should be at least 6 characters long!']
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        maxLength: [15, 'Location should be no more than 15 characters long!']
    },
    dateOfCreation: {
        type: String,
        required: [true, 'Date of creation is required!'],
        validate: [/^\d{2}\.\d{2}\.\d{4}$/, `The date of creation must be in 'dd.mm.yyyy' format `]
    },
    rating: {
        type: Number,
        default: 0
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [8, 'Description should be at least 8 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'The image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!']
    },
    usersList: [{
            type: Types.ObjectId,
            ref: 'User'
    }],
    autor: {
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