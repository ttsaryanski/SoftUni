function setUser(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

function getToken() {
    const userData = getUserData();
    const token = userData?.accessToken || null;
    return token;
}

function hasOwner(ownerId) {
    const userData = getUserData();
    return ownerId === userData?._id;
}

function clearUserData() {
    sessionStorage.removeItem('userData')
}

export const userUtil = {
    setUser,
    getUserData,
    getToken,
    hasOwner,
    clearUserData
}