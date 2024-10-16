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

export {
    checkOwner,
    checkNotOwner
}