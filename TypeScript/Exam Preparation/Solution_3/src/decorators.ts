export function decorator1<T extends new (...args: any[]) => {}>(
    constructor: T
) {
    return class extends constructor {
        protected _offset: number = 3;
    };
}

export function decorator2(
    target: Object,
    methodName: String,
    descriptor: PropertyDescriptor
) {}
export function decorator3(
    target: Object,
    methodName: String,
    descriptor: PropertyDescriptor
) {}

export function decorator4<T extends abstract new (...args: any[]) => {}>(
    constructor: T
) {
    abstract class DecoratedClass extends constructor {
        public static forbiddenSymbols: string[] = [
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
    }
    return DecoratedClass;
}
