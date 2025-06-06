type FunctionKeys<T> = {
    [Key in keyof T]: T[Key] extends Function ? Key : never;
}[keyof T];

type AllFunctions<T> = Pick<T, FunctionKeys<T>>;

// type test = {
//    name: string,
//    age: number,
//    test:() => string;
// }
// type extracted = AllFunctions<test>

// type Employee = {
//     name: string,
//     salary: number,
//     work: () => void,
//     takeBreak: () => string
// };
// type extracted2 = AllFunctions<Employee>;

// type Nope = {
//     name: string
// };
// type extracted3 = AllFunctions<Nope>;
