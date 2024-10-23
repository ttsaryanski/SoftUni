import Item from "../models/Item.js";
import User from "../models/User.js";

const getAll = (query = {}) => {
    let items = Item.find();
    
    // if (query.name) {
    //     items.find({ name: { $regex: query.name, $options: 'i' } });
    // };

    // if (query.genre) {
    //     items.find({ genre: { $regex: query.genre, $options: 'i' } });
    // };

    // if (query.year) {
    //     items.find({ year: query.year });
    // };

    return items;
};

const create = async (data, ownerId) => {
    const item = await Item.create({ ...data, owner: ownerId });

    await User.findByIdAndUpdate(ownerId, { $push: { itemsList: item._id } });

    return 
};

const getById = (itemId) => Item.findById(itemId);

const remove = async (itemId, userId) => {
    await Item.findByIdAndDelete(itemId);

    await User.findByIdAndUpdate(userId, { $pull: { itemsList: itemId } });
};

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