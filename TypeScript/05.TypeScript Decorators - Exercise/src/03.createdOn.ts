// TODO: Class Decorator

export {};

function addCreatedOn(constructor: { new (...args: any[]): User }) {
    return class extends constructor {
        createdOn = new Date();
    };
}

@addCreatedOn
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayUserInfo(): void {
        console.log(`${this.name}, Age: ${this.age}`);
    }
}

const user = new User("John Doe", 30);
user.displayUserInfo();
console.log(user);
console.log((user as any).createdOn);
