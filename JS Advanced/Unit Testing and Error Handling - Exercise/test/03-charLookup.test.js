import { assert, expect } from "chai";
import { lookupChar } from "../03-charLookup.js";

describe('lookupChar', () => {
    it('should return undefined when the first parameter is not a string', () => {
        expect(lookupChar(123, 0)).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
        expect(lookupChar([], 0)).to.be.undefined;
        expect(lookupChar(null, 0)).to.be.undefined;
        expect(lookupChar(undefined, 0)).to.be.undefined;
    });

    it('should return undefined when the second parameter is not an integer', () => {
        expect(lookupChar('test', '0')).to.be.undefined;
        expect(lookupChar('test', 0.5)).to.be.undefined;
        expect(lookupChar('test', {})).to.be.undefined;
        expect(lookupChar('test', [])).to.be.undefined;
        expect(lookupChar('test', null)).to.be.undefined;
        expect(lookupChar('test', undefined)).to.be.undefined;
    });

    it('should return "Incorrect index" when the index is negative or out of bounds', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
        expect(lookupChar('test', 100)).to.equal('Incorrect index');
    });

    it('should return the correct character for valid inputs', () => {
        expect(lookupChar('test', 0)).to.equal('t');
        expect(lookupChar('test', 1)).to.equal('e');
        expect(lookupChar('test', 2)).to.equal('s');
        expect(lookupChar('test', 3)).to.equal('t');
    });
});