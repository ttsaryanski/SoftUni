import productService from "../services/productService.js";

const checkOwner = async (req, res, next) => {
    const productId = req.params.productId;
    const product = await productService.getById(productId);

    if (product.owner == req.user?._id) {
        return next();
    } else {
        return res.render('404', { error: 'You are not authorized for this action!' });
    }
};

const checkNotOwner = async (req, res, next) => {
    const productId = req.params.productId;
    const product = await productService.getById(productId);

    if (product.owner != req.user?._id) {
        return next();
    } else {
        return res.render('404', { error: 'You are not authorized for this action!' });
    }
};

export {
    checkOwner,
    checkNotOwner
}