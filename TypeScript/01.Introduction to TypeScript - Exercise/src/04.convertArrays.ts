function convertArr(words: string[]): [string, number] {
    const string = words.join("");

    return [string, string.length];
}

console.log(convertArr(["How", "are", "you?"]));
console.log(
    convertArr(["Today", " is", " a ", "nice", " ", "day for ", "TypeScript"])
);
