import { Schema, model, Types } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters long!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [0, 'Age must be a positive number!']
    },
    solarSystem : {
        type: String,
        required: [true, 'Solar system is required!'],
        minLength: [2, 'Solar system should be at least 2 characters long!']
    },
    type : {
        type: String,
        required: [true, 'Type is required!'],
        enum: {
            values: ["Inner", "Outer", "Dwarf"],
            message: 'You can only use the ones listed!'
        }
    },
    moons: {
        type: Number,
        required: [true, 'Moons is required!'],
        min: [0, 'Moons must be a positive number!']
    },
    size: {
        type: Number,
        required: [true, 'Size is required!'],
        min: [0, 'Size must be a positive number!']
    },
    rings : {
        type: String,
        required: [true, 'Rings is required!'],
        enum: {
            values: ["Yes", "No"],
            message: 'You can only use the ones listed!'
        }
    },
    description : {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!'],
        maxLength: [100, 'Description should be no more than 100 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Planet image is required!'],
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