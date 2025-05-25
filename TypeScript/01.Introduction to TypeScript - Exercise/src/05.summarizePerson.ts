function summarize(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {
    const fullName = middleName
        ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;
    const resultHobbies = hobbies ? hobbies.join(", ") : "-";
    const resultInfo = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : "-";

    return [id, fullName, age, resultHobbies, resultInfo];
}

console.log(
    summarize(
        12,
        "Eliot",
        "Des",
        20,
        "Braylen",
        ["tennis", "football", "hiking"],
        ["Sales Consultant", 2500]
    )
);
console.log(
    summarize(20, "Mary", "Trent", 25, undefined, ["fitness", "rowing"])
);
console.log(summarize(21, "Joseph", "Angler", 28));
console.log(summarize(21, "Kristine", "Neva", 23, ""));
