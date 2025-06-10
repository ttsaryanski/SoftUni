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
    private encodedChar: number = 0;
    private decodedChar: number = 0;

    constructor(language: Tlanguage, cipher: Vcipher) {
        super(language, cipher);
    }

    public encodeMessage(secretMessage: string): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        const filteredMessage = [...secretMessage]
            .filter(
                (char) => !PartialMessageEncoder.forbiddenSymbols.includes(char)
            )
            .join("");

        if (!this.language.isCompatibleToCharset(filteredMessage)) {
            return "Message not compatible.";
        }

        let encodedMessage = this.cipher.encipher(filteredMessage);
        this.encodedChar += filteredMessage.length;

        return encodedMessage;
    }

    public decodeMessage(secretMessage: string): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        if (!this.language.isCompatibleToCharset(secretMessage)) {
            return "Message not compatible.";
        }

        let decodedMessage = this.cipher.decipher(secretMessage);
        this.decodedChar += decodedMessage.length;

        return decodedMessage;
    }

    public totalProcessedCharacters(
        type: "Encoded" | "Decoded" | "Both"
    ): string {
        let total = 0;

        if (type === "Encoded") {
            total = this.encodedChar;
        } else if (type === "Decoded") {
            total = this.decodedChar;
        } else if (type === "Both") {
            total = this.encodedChar + this.decodedChar;
        }

        return `Total processed characters: ${total}`;
    }
}
