import { assert, expect } from "chai";
import { mathEnforcer } from "../04-mathEnforcer.js";

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it('should add 5 to number input', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(10.5)).to.be.closeTo(15.5, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        it('should subtract 10 from number input', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined if any of the inputs is not a number', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, undefined)).to.be.undefined;
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
        });

        it('should return the sum of two number inputs', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
            expect(mathEnforcer.sum(10.5, 0.5)).to.be.closeTo(11, 0.01);
            expect(mathEnforcer.sum(-10.5, 10.5)).to.be.closeTo(0, 0.01);
        });
    });
});