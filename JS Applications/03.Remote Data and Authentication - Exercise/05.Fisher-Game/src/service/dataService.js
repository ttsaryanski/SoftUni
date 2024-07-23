import { api } from '../utility/requester.js';

const endPoints = {
    noId: 'http://localhost:3030/data/catches',
    byId: 'http://localhost:3030/data/catches/'
}

async function getAll() {
    return await api.get(endPoints.noId);
}

async function create(data) {
    return await api.post(endPoints.noId, data);
}

async function update(id, data) {
    return await api.put(endPoints.byId + id, data);
}

async function del(id) {
    return await api.del(endPoints.byId + id);
}

export const dataService = {
    getAll,
    create,
    update,
    del
}