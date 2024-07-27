import { api } from '../utility/requester.js';
import { userUtil } from '../utility/userUtil.js';

const endPoints = {
    addLike: '/data/useful',
    likesById: (charId) => `/data/useful?where=characterId%3D%22${charId}%22&distinct=_ownerId&count`,
    likesByUser: (charId, userId) => `/data/useful?where=characterId%3D%22${charId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

async function postLike(data) {
    return await api.post(endPoints.addLike, data);
}

async function getLikesById(id) {
    const userData = userUtil.getUserData();

    const requests = [
        api.get(endPoints.likesById(id))
    ];

    if (userData) {
        requests.push(api.get(endPoints.likesByUser(id, userData._id)));
    }

    const [likes, hasLiked] = await Promise.all(requests);
    
    return { likes, hasLiked: Boolean(hasLiked)};
}

async function getLikesByUser(charId, userId) {
    return await api.get(endPoints.likesByUser(charId, userId))
}

export const likesService = {
    postLike,
    getLikesById,
    getLikesByUser
}