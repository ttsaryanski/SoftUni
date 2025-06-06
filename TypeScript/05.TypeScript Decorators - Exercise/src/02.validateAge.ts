// TODO: Accessor Decorator

function validator(
    target: any,
    accessorName: string,
    descriptor: PropertyDescriptor
) {
    const originalSet = descriptor.set;

    descriptor.set = function (val: number) {
        if (val < 1 || val > 200) {
            console.error("Error: Age must be between 1 and 200");
        }
        originalSet?.call(this, val);
    };
    return descriptor;
}

class Age {
    private _age!: number;
    constructor(age: number) {
        this.age = age;
    }

    @validator
    set age(val: number) {
        this._age = val;
    }

    get age() {
        return this._age;
    }
}

let ageVal = new Age(10);
ageVal.age = -10;
