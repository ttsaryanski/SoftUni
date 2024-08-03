import { api } from '../utility/requester.js';

const endPoints = {
    getAll: '/data/fruits?sortBy=_createdOn%20desc',
    createNew: '/data/fruits',
    apiById: '/data/fruits/',
    search: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`
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

export const dataService = {
    getAll,
    createNew,
    getDetails,
    editItem,
    delItem,
    searchItem
}