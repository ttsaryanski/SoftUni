import Item from "../models/Item.js";

const getAll = (query = {}) => {
    let items = Item.find();
    
    if (query.name) {
        items.find({ name: { $regex: query.name, $options: 'i' } });
    };

    if (query.solarSystem) {
        items.find({ solarSystem: { $regex: query.solarSystem, $options: 'i' } });
    };

    return items;
};

const create = (data, ownerId) => Item.create({...data, owner: ownerId});

const getById = (itemId) => Item.findById(itemId).populate('usersList');

const remove = (itemId) => Item.findByIdAndDelete(itemId);

const edit = (itemId, data) => Item.findByIdAndUpdate(itemId, data, { runValidators: true });

const getMyItem = (userId) => Item.find({ owner: userId });

const like = (itemId, userId) => Item.findByIdAndUpdate(itemId, { $addToSet: { usersList: userId, new: true } });

const getMyLikes = (userId) => Item.find({ usersList:  userId });

const getAllByIds = (ids) => Item.find({ _id: { $in: ids } });

export default {
    getAll,
    create,
    getById,
    remove,
    edit,
    getMyItem,
    like,
    getMyLikes,
    getAllByIds
};