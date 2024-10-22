import Item from "../models/Item.js";
import User from "../models/User.js";

const getAll = () => Item.find();

const create = async (data, ownerId) => {
    const item = await Item.create({ ...data, owner: ownerId });

    await User.findByIdAndUpdate(ownerId, { $push: { myAds: item._id } });

    return 
};

const getById = (itemId) => Item.findById(itemId).populate('usersList');

const remove = async (itemId, userId) => {
    await Item.findByIdAndDelete(itemId);

    await User.findByIdAndUpdate(userId, { $pull: { myAds: itemId } });
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