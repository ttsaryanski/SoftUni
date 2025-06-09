import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";

export function decorator1<T extends { new (...args: any[]): {} }>(
    constructor: T
): T {
    return class extends constructor {
        protected _offset: number = 3;
    };
}
export function decorator2(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (
        this: { _offset: number },
        text: string
    ): string {
        const originalOffset = this._offset;
        this._offset = 3;

        const result = originalMethod.call(this, text);

        this._offset = originalOffset;

        return result;
    };

    return descriptor;
}

export function decorator3(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (
        this: { _offset: number },
        text: string
    ): string {
        const originalOffset = this._offset;
        this._offset = 3;

        const result = originalMethod.call(this, text);

        this._offset = originalOffset;

        return result;
    };

    return descriptor;
}

export function decorator4<T extends abstract new (...args: any[]) => any>(
    constructor: T
) {
    (constructor as any).forbiddenSymbols = [
        "_",
        ",",
        ".",
        "!",
        "?",
        "-",
        ";",
        " ",
        '"',
        "'",
    ];

    return constructor;
}
