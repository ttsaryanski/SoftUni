import { api } from '../utility/requester.js';

const endPoints = {
    getAll: '/data/characters?sortBy=_createdOn%20desc',
    newChar: '/data/characters',
    charById: '/data/characters/',
    addLike: '/data/useful',
    getAllLikes: (id) => `/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`
}

async function getAll() {
    return await api.get(endPoints.getAll);
}

async function createNew(data) {
    return await api.post(endPoints.newChar, data);
}

async function getDetails(id) {
    return await api.get(endPoints.charById + id);
}

async function editChar(id, data) {
    return await api.put(endPoints.charById + id, data);
}

async function delChar(id) {
    return await api.del(endPoints.charById + id);
}

async function addLike() {
    return await api.post(endPoints.addLike);
}

async function getAllLikes(id) {
    return await api.get(endPoints.getAllLikes(id))
}

export const dataService = {
    getAll,
    createNew,
    getDetails,
    editChar,
    delChar,
    addLike,
    getAllLikes
}