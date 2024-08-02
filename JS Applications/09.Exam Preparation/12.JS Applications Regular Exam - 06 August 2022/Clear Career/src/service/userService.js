import { api } from '../utility/requester.js';
import { userUtil } from '../utility/userUtil.js';

const endPoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout'
}

async function register(data) {
    const userData = await api.post(endPoints.register, data);
    userUtil.setUser(userData);
    
}

async function login(data) {
    const userData = await api.post(endPoints.login, data);
    userUtil.setUser(userData);
}

async function logout() {
     await api.get(endPoints.logout);
     userUtil.clearUserData();
}

export const userService = {
    register,
    login,
    logout
}