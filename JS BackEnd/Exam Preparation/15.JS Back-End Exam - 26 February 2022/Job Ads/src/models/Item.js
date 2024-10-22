import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    headline : {
        type: String,
        required: [true, 'Headline is required!'],
        minLength: [4, 'Headline should be at least 4 characters long!']
    },
    location : {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [8, 'Location should be at least 8 characters long!']
    },
    companyName : {
        type: String,
        required: [true, 'Company name is required!'],
        minLength: [3, 'Company name should be at least 3 characters long!']
    },
    companyDescription : {
        type: String,
        required: [true, 'Company description is required!'],
        maxLength: [40, 'Company description should be no more than 40 characters long!']
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