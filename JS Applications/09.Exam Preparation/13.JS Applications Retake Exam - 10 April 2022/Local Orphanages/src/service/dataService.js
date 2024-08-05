import { api } from '../utility/requester.js';

const endPoints = {
    getAll: '/data/posts?sortBy=_createdOn%20desc',
    createNew: '/data/posts',
    apiById: '/data/posts/',
    getMyPost: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

async function getAll() {
    return await api.get(endPoints.getAll);
}

async function createNew(data) {
    return await api.post(endPoints.createNew, data);
}

async function getDetails(id) {
    return await api.get(endPoints.apiById + id);
}

async function editItem(id, data) {
    return await api.put(endPoints.apiById + id, data);
}

async function delItem(id) {
    return await api.del(endPoints.apiById + id);
}

async function getMyPost(userId) {
    return await api.get(endPoints.getMyPost(userId));
}

export const dataService = {
    getAll,
    createNew,
    getDetails,
    editItem,
    delItem,
    getMyPost
}