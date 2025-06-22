export function decorator1(
    target: any,
    accessorName: string,
    descriptor: PropertyDescriptor
) {}

export function decorator2(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (this: any, flyerWeight?: number): number {
        let base = originalMethod.call(this, flyerWeight);

        const optWeight = this._optimalWeight;
        if (
            typeof flyerWeight === "number" &&
            typeof optWeight === "number" &&
            flyerWeight > optWeight
        ) {
            base /= 2;
        }

        return base;
    };

    return descriptor;
}

export function decorator3<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);

            if (args.length === 3) {
                (this as any)._optimalWeight = args[2];
            }
        }
    };
}

export function decorator4(
    target: any,
    accessorName: string,
    descriptor: PropertyDescriptor
) {}
