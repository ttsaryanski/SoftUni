export function decorator1<T extends { new (...args: any[]): {} }>(
    constructor: T
): T | void {}

export function decorator2(
    target: any,
    accessorName: string,
    descriptor: PropertyDescriptor
): void {
    const originalGet = descriptor.get;

    descriptor.get = function () {
        const originalValue = originalGet?.apply(this);
        return originalValue * 1.2;
    };
}

export function decorator3(
    target: any,
    accessorName: string,
    descriptor: PropertyDescriptor
): void {
    const originalGet = descriptor.get;

    descriptor.get = function () {
        const originalValue = originalGet?.apply(this);
        return originalValue * 1.2;
    };
}

export function decorator4(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {}

export function decorator5<T extends abstract new (...args: any[]) => {}>(
    constructor: T
) {
    abstract class NewName extends constructor {
        static readonly MotelName = "Monthly Motel";
    }
    return NewName;
}
