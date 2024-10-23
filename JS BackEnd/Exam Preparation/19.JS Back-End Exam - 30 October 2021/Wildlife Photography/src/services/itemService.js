import Item from "../models/Item.js";
import User from "../models/User.js";

const getAll = (query = {}) => {
    let items = Item.find();

    return items;
};

const create = async (data, ownerId) => {
    const item = await Item.create({ ...data, autor: ownerId });

    await User.findByIdAndUpdate(ownerId, { $push: { myPosts: item._id } });

    return 
};

const getById = (itemId) => Item.findById(itemId).populate('usersList.user');

const remove = async (itemId, userId) => {
    await Item.findByIdAndDelete(itemId);

    await User.findByIdAndUpdate(userId, { $pull: { myPosts: itemId } });
};

const edit = (itemId, data) => Item.findByIdAndUpdate(itemId, data, { runValidators: true });

const getMyItem = (userId) => Item.find({ owner: userId });

const like = (itemId, userId) => Item.findByIdAndUpdate(itemId, { $addToSet: { usersList: userId, new: true } });

const upLike = (itemId, userId) => Item.findByIdAndUpdate(itemId, { $addToSet: { usersList: userId }, $inc: { rating: 1 } }, { new: true });

const downLike = (itemId, userId) => Item.findByIdAndUpdate(itemId, { $addToSet: { usersList: userId }, $inc: { rating: -1 } }, { new: true });

const getMyLikes = (userId) => Item.find({ usersList:  userId });

const getAllByIds = (ids) => Item.find({ _id: { $in: ids } }). populate('autor');

export default {
    getAll,
    create,
    getById,
    remove,
    edit,
    getMyItem,
    like,
    getMyLikes,
    upLike,
    downLike,
    getAllByIds
};