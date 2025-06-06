// TODO: Accessor Decorator Factories

export {};

function nameValidator(minLength: number) {
    return function (
        target: any,
        accessorName: string,
        descriptor: PropertyDescriptor
    ) {
        const originalSet = descriptor.set;

        descriptor.set = function (val: string) {
            if (val.length < minLength) {
                console.error(
                    `Runtime Error: name must have a min length of ${minLength} characters`
                );
            }
            originalSet?.call(this, val);
        };

        return descriptor;
    };
}

function ageValidator(min: number, max: number) {
    return function (
        target: any,
        accessorName: string,
        descriptor: PropertyDescriptor
    ) {
        const originalSet = descriptor.set;

        descriptor.set = function (val: number) {
            if (val < min || val > max) {
                console.error(
                    `Runtime Error: Age must be between ${min} and ${max}`
                );
            }
            originalSet?.call(this, val);
        };

        return descriptor;
    };
}

function passValidator(regex: RegExp) {
    return function (
        target: any,
        accessorName: string,
        descriptor: PropertyDescriptor
    ) {
        const originalSet = descriptor.set;

        descriptor.set = function (val: string) {
            if (!val.match(regex)) {
                console.error(
                    `Runtime Error: password needs to match ${regex}`
                );
            }
            originalSet?.call(this, val);
        };

        return descriptor;
    };
}

class User {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @nameValidator(1)
    set name(val: string) {
        this._name = val;
    }

    get name() {
        return this._name;
    }

    @ageValidator(1, 150)
    set age(val: number) {
        this._age = val;
    }

    get age() {
        return this._age;
    }

    @passValidator(/^[a-zA-Z0-9!@]+$/g)
    set password(val: string) {
        this._password = val;
    }
}

// minLength = 1
// min = 1, max = 150
// regex = /^[a-zA-Z0-9!@]+$/g
let user = new User("John", 130, "hardPassword12");
let user2 = new User("John", 30, "!test");
let user3 = new User("John", 25, "@werty");
let user4 = new User("Jo", 20, "password123");

// minLength = 3
// min = 1, max = 100
// regex = /^[a-zA-Z0-9]+$/g
// let user = new User("John", 130, "hardPassword12");
// let user2 = new User("John", 30, "!test");
// let user3 = new User("John", 25, "@werty");
// let user4 = new User("Jo", 20, "password123");
