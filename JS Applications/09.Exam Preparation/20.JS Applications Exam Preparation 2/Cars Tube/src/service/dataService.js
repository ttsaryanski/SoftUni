import { api } from '../utility/requester.js';

const endPoints = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    createNew: '/data/cars',
    apiById: '/data/cars/',
    search: (query) => `/data/cars?where=year%3D${query}`,
    getMyCar: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
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

async function searchItem(query) {
    return await api.get(endPoints.search(query));
}

async function getMyCar(userId) {
    return await api.get(endPoints.getMyCar(userId));
}

export const dataService = {
    getAll,
    createNew,
    getDetails,
    editItem,
    delItem,
    searchItem,
    getMyCar
}