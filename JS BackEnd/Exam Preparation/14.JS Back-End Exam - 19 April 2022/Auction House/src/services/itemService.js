import Item from "../models/Item.js";

const getAllOpened = () => Item.find({ isClosed: false});

const getAllClosed = (userId) => Item.find({ owner: userId, isClosed: true}).populate('usersList');

const create = (data, ownerId) => Item.create({...data, owner: ownerId});

const getById = (itemId) => Item.findById(itemId).populate('usersList owner');

const remove = (itemId) => Item.findByIdAndDelete(itemId);

const edit = (itemId, data) => Item.findByIdAndUpdate(itemId, data, { runValidators: true });

const getMyItem = (userId) => Item.find({ owner: userId });

const like = (itemId, userId) => Item.findByIdAndUpdate(itemId, { usersList: userId });

const getMyLikes = (userId) => Item.find({ usersList:  userId });

const getAllByIds = (ids) => Item.find({ _id: { $in: ids } });

const close = (itemId) => Item.findByIdAndUpdate(itemId, { isClosed: true });

export default {
    getAllOpened,
    getAllClosed,
    create,
    getById,
    remove,
    edit,
    getMyItem,
    like,
    getMyLikes,
    getAllByIds,
    close
};