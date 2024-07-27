import { api } from '../utility/requester.js';

const endPoints = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    newCar: '/data/cars',
    carById: '/data/cars/',
    search: (query) => `/data/cars?where=model%20LIKE%20%22${query}%22`
}

async function getAll() {
    return await api.get(endPoints.getAll);
}

async function createNew(data) {
    return await api.post(endPoints.newCar, data);
}

async function getDetails(id) {
    return await api.get(endPoints.carById + id);
}

async function editCar(id, data) {
    return await api.put(endPoints.carById + id, data);
}

async function delCar(id) {
    return await api.del(endPoints.carById + id);
}

async function searchCar(query) {
    return await api.get(endPoints.search(query));
}

export const dataService = {
    getAll,
    createNew,
    getDetails,
    editCar,
    delCar,
    searchCar
}