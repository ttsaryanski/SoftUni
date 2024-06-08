import { assert, expect } from "chai";
import { isOddOrEven } from "../02-evenOrOdd.js";

describe('isOddOrEven', () => {

    it('should return undefined when the input is not a string', () => {
        expect(isOddOrEven(123)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
    });

    it('should return "even" when the input string length is even', () => {
        expect(isOddOrEven('test')).to.equal('even');
        expect(isOddOrEven('even')).to.equal('even');
        expect(isOddOrEven('1234')).to.equal('even');
    });

    it('should return "odd" when the input string length is odd', () => {
        expect(isOddOrEven('tests')).to.equal('odd');
        expect(isOddOrEven('odd')).to.equal('odd');
        expect(isOddOrEven('123')).to.equal('odd');
    });
});