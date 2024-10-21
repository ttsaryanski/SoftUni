import itemService from "../services/itemService.js";

const checkOwner = async (req, res, next) => {
    const itemId = req.params.itemId;
    const item = await itemService.getById(itemId);

    if (item.owner == req.user?._id) {
        return next();
    } else {
        req.session.error = 'Only the creator can perform this operation!';

        return res.redirect('/item/catalog');
    }
};

const checkNotOwner = async (req, res, next) => {
    const itemId = req.params.itemId;
    const item = await itemService.getById(itemId);

    if (item.owner != req.user?._id) {
        return next();
    } else {
        req.session.error = 'The creator cannot perform this operation!';

        return res.redirect('/item/catalog');
    }
};

const checkIsLiked = async (req, res, next) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    const item = await itemService.getById(itemId).lean();
    if (!item.usersList.some(id => id == userId)) {
        return next();
    }
    req.session.error = 'You have already performed this action!';

    return res.redirect('/item/catalog')
};

export {
    checkOwner,
    checkNotOwner,
    checkIsLiked
}