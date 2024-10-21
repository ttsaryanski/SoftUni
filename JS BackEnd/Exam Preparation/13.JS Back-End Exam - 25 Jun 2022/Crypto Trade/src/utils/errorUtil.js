export const createErrorMsg = (err, sessionError) => {

    if (!err && sessionError) {
        return sessionError;
    }

    let errorMsg = null;

    switch (err?.name) {
        case 'ValidationError':
            errorMsg =  Object.values(err.errors).map(err => {
                if (err.kind === 'enum') {
                    return `You have entered invalid data!`;
                };
                return err.message}).join(', ');
            break;
        case 'CastError':
            errorMsg = 'Missing or invalid data!';
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