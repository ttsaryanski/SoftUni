import { assert, expect } from "chai";
import { createCalculator } from "../07-addSubtract.js";

describe ('createCalculator', () => {
    it('Should return an object', () => {
        const calc = createCalculator();
        assert.isObject(calc, 'Expected to return an obj');
    });

    it('Should have add, subtract and get function', () => {
        const calc = createCalculator();
        assert.isFunction(calc.add, 'Expected to ada to be a function');
        assert.isFunction(calc.subtract, 'Expected to ada to be a function');
        assert.isFunction(calc.get, 'Expected to ada to be a function');
    });

    it('Should add number correctly', () => {
        const calc = createCalculator();
        calc.add(5);
        assert.strictEqual(calc.get(), 5, 'Expected value be 5 after adding 5');
    });

    it('Should substract number correctly', () => {
        const calc = createCalculator();
        calc.subtract(3);
        assert.strictEqual(calc.get(), -3, 'Expected value be -3 after subtracting -3');
    });

    it('Should substract number correctly', () => {
        const calc = createCalculator();
        calc.add(10);
        calc.subtract(4);
        assert.strictEqual(calc.get(), 6, 'Expected value but be 6 after add 10 and substract 4');
    });

    it('Should work with string that can be parsed to numbers', () => {
        const calc = createCalculator();
        calc.add('7');
        calc.subtract('2');
        assert.strictEqual(calc.get(), 5, 'Expected value be 5');
    });

    it('Return NaN when add non-number string', () => {
        const calc = createCalculator();
        calc.add('abc');
        assert.isNaN(calc.get(), NaN, 'value should be NaN');
    });

    it('Return NaN when subtract non-number string', () => {
        const calc = createCalculator();
        calc.subtract('abc');
        assert.isNaN(calc.get(), NaN, 'value should be NaN');
    });

    it('should not allow direct modification of internal value', () => {
        const calc = createCalculator();
        calc.value = 100;
        assert.strictEqual(calc.get(), 0, 'Internal value should not be directly modifiable');
    });

    it('should initialize with value 0', function() {
        const calc = createCalculator();
        assert.strictEqual(calc.get(), 0, 'Initial value should be 0');
    });
    
});