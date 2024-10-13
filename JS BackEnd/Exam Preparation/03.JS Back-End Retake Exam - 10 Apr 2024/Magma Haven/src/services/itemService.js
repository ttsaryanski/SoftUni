import Item from "../models/Item.js";

const getAll = (query = {}) => {
    let items = Item.find();
    
    if (query.name) {
        items.find({ name: { $regex: query.name, $options: 'i' } });
    };

    if (query.type) {
        items.find({ type: query.type });
    };

    return items;
};

const create = (data, ownerId) => Item.create({...data, owner: ownerId});

const getById = (itemId) => Item.findById(itemId).populate('usersList.user');

const remove = (itemId) => Item.findByIdAndDelete(itemId);

const edit = (itemId, data) => Item.findByIdAndUpdate(itemId, data, { runValidators: true });

const getMyItem = (userId) => Item.find({ owner: userId });

const like = (itemId, userId) => Item.findByIdAndUpdate(itemId, { $push: { usersList: { user: userId } } });

const checkIsLiked = (itemId, userId) => Item.findOne({ _id: itemId, usersList: { $elemMatch: { user: userId } } });

const getMyLikes = userId => Item.find({ usersList: { $elemMatch: { user: userId } } });

export default {
    getAll,
    create,
    getById,
    remove,
    edit,
    getMyItem,
    like,
    checkIsLiked,
    getMyLikes
};