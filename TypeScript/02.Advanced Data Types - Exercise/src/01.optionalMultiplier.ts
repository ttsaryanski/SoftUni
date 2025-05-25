function multipler(
    param1?: string | number,
    param2?: string | number,
    param3?: string | number
): number {
    let result = 1;

    if (param1 !== undefined) {
        result *= typeof param1 === "string" ? Number(param1) : param1;
    }

    if (param2 !== undefined) {
        result *= typeof param2 === "string" ? Number(param2) : param2;
    }

    if (param3 !== undefined) {
        result *= typeof param3 === "string" ? Number(param3) : param3;
    }

    // let num1 = param1 == undefined ? 1 : Number(param1);
    // let num2 = param2 == undefined ? 1 : Number(param2);
    // let num3 = param3 == undefined ? 1 : Number(param3);

    // let result = num1 * num2 * num3;

    return result;
}

console.log(multipler("3", 5, "10"));
console.log(multipler("2", "2"));
console.log(multipler(undefined, 2, 3));
console.log(multipler(7, undefined, "2"));
console.log(multipler());
