import { Language } from "./contracts/language";
import { DNACode } from "./types";

export class DNACodeLanguage implements Language {
    private _charSet: Set<DNACode> = new Set(["A", "C", "G", "T"]);

    get charset() {
        return this._charSet;
    }

    isCompatibleToCharset(message: string): boolean {
        const messageChars = message.split("");
        const allowedChars: string[] = Array.from(this._charSet.values());
        const isCompatible = messageChars.every((char) =>
            allowedChars.includes(char as DNACode)
        );

        return isCompatible;
    }
}
