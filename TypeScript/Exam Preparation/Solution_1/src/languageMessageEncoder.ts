import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

export class LanguageMessageEncoder<
        Tlanguage extends Language,
        Vcipher extends Cipher<Tlanguage>
    >
    extends PartialMessageEncoder
    implements MessageEncoder
{
    private encodedCount: number = 0;
    private decodedCount: number = 0;

    constructor(language: Tlanguage, cipher: Vcipher) {
        super(language, cipher);
        this.language;
        this.cipher;
    }

    encodeMessage(message: string): string {
        if (typeof message !== "string" || message.length === 0) {
            return "No message.";
        }

        const cleanedMessage = [...message]
            .filter(
                (char) => !PartialMessageEncoder.forbiddenSymbols.includes(char)
            )
            .join("");

        if (!this.language.isCompatibleToCharset(cleanedMessage)) {
            return "Message not compatible.";
        }

        const encoded = this.cipher.encipher(cleanedMessage);
        this.encodedCount += cleanedMessage.length;

        return encoded;
    }

    decodeMessage(message: string): string {
        if (typeof message !== "string" || message.length === 0) {
            return "No message.";
        }

        if (!this.language.isCompatibleToCharset(message)) {
            return "Message not compatible.";
        }

        const decoded = this.cipher.decipher(message);
        this.decodedCount += decoded.length;

        return decoded;
    }

    totalProcessedCharacters(type: "Encoded" | "Decoded" | "Both"): string {
        let total = 0;

        switch (type) {
            case "Encoded":
                total = this.encodedCount;
                break;
            case "Decoded":
                total = this.decodedCount;
                break;
            case "Both":
                total = this.encodedCount + this.decodedCount;
                break;
        }
        return `Total processed characters count: ${total}`;
    }
}
