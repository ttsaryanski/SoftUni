import { Language } from "./contracts/language";

type DNAChar = "A" | "C" | "G" | "T";

export class DNACodeLanguage implements Language {
    private _charset: Set<DNAChar> = new Set<DNAChar>(["A", "C", "G", "T"]);

    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(sample: string): boolean {
        let allChars = sample.split("");
        let isCompatible = allChars.every((x) =>
            this._charset.has(x as DNAChar)
        );
        return isCompatible;
    }
}
