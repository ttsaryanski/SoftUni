import { expect } from "chai";
import { sum } from "../04-sumOfNumbers.js";

describe('sum', () => {
    it('return the sum of numbers', () => {
        const input = [1, 2, 3];
        const expectedResult = 6;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expectedResult);

    });
});