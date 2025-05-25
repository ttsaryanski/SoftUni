type User = {
    id: number | string;
    username: string;
    passwordHash: string | string[];
    status: "Locked" | "Unlocked" | "Deleted";
    email?: string;
};

function isUser(user: unknown): user is User {
    return (
        user != undefined &&
        typeof user === "object" &&
        "id" in user &&
        ((typeof user.id === "number" && user.id > 100) ||
            (typeof user.id === "string" && user.id.length === 14)) &&
        "username" in user &&
        typeof user.username === "string" &&
        user.username.length >= 5 &&
        user.username.length <= 10 &&
        "passwordHash" in user &&
        ((typeof user.passwordHash === "string" &&
            user.passwordHash.length === 20) ||
            (Array.isArray(user.passwordHash) &&
                user.passwordHash.every(
                    (x) => typeof x === "string" && x.length === 8
                ) &&
                user.passwordHash.length === 4)) &&
        "status" in user &&
        typeof user.status === "string" &&
        (user.status === "Locked" || user.status === "Unlocked")
    );
}

let user1 = {
    id: 120,
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
};
let user2 = {
    id: "1234-abcd-5678",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Unlocked",
};
let user3 = {
    id: "20",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
};
let user4 = {
    id: 255,
    username: "Pesho",
    passwordHash: ["asdf1245", "qrqweggw", "123-4567", "98765432"],
    status: "Locked",
    email: "something",
};
let user5 = {
    id: "qwwe-azfg-ey38",
    username: "Someone",
    passwordHash: ["qwezz8jg", "asdg-444", "12-34-56"],
    status: "Unlocked",
};
let user6 = {
    id: 1344,
    username: "wow123",
    passwordHash: "123456-123456-1234567",
    status: "Locked",
    email: "something@abv.bg",
};

console.log(isUser(user1));
console.log(isUser(user2));
console.log(isUser(user3));
console.log(isUser(user4));
console.log(isUser(user5));
console.log(isUser(user6));
