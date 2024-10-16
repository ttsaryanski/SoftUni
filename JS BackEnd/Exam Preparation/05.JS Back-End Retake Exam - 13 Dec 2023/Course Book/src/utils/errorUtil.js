export const createErrorMsg = (err, sessionError) => {

    if (!err && sessionError) {
        return sessionError;
    }

    let errorMsg = null;

    switch (err?.name) {
        case 'ValidationError':
            errorMsg =  Object.values(err.errors).map(err => err.message).join(', ');
            break;
        case 'CastError':
            errorMsg = 'Please select Cast';
            break;
        case 'MongooseError':
            errorMsg = 'Server is busy, please try again later!';
            break;
        default:
            errorMsg = err?.message || null;
    }

    
    if (sessionError) {
        errorMsg = errorMsg ? `${errorMsg}, ${sessionError}` : sessionError;
    }
    

    return errorMsg;
};