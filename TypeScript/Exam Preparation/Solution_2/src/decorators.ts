export function decorator1<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        protected _offset: number = 3;
    };
}
export function decorator2() {}
export function decorator3() {}

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
        "'",
        '"',
    ];
    return constructor;
}
