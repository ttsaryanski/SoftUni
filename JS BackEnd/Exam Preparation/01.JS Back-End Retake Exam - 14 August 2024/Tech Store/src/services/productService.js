import Product from "../models/Product.js";

const getAll = () => {
    const products = Product.find();

    return products;
};

const create = (data, ownerId) => Product.create({...data, owner: ownerId});

const getById = (productId) => Product.findById(productId).populate('preferedList.user');

const remove = (productId) => Product.findByIdAndDelete(productId);

const edit = (productId, data) => Product.findByIdAndUpdate(productId, data, { runValidators: true });

const prefer = (productId, userId) => Product.findByIdAndUpdate(productId, { $push: { preferedList: { user: userId } } });

const checkIsPrefer = (productId, userId) => Product.findOne({ _id: productId, preferedList: { $elemMatch: { user: userId } } });

const getMyProducts = (userId) => Product.find({ owner: userId });

const getMyPrefered = userId => Product.find({ preferedList: { $elemMatch: { user: userId } } });

export default {
    getAll,
    create,
    getById,
    remove,
    edit,
    prefer,
    checkIsPrefer,
    getMyProducts,
    getMyPrefered
};