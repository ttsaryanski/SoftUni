import { assert, expect } from "chai";
import { rgbToHexColor } from "../06-rgbToHex.js";

describe('rgbToHexColor', () => {
    it('should return #000000 for (0, 0, 0)', function() {
        assert.strictEqual(rgbToHexColor(0, 0, 0), '#000000');
    });

    it('should return #FFFFFF for (255, 255, 255)', function() {
        assert.strictEqual(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });

    it('should return #FF0000 for (255, 0, 0)', function() {
        assert.strictEqual(rgbToHexColor(255, 0, 0), '#FF0000');
    });

    it('should return #00FF00 for (0, 255, 0)', function() {
        assert.strictEqual(rgbToHexColor(0, 255, 0), '#00FF00');
    });

    it('should return #0000FF for (0, 0, 255)', function() {
        assert.strictEqual(rgbToHexColor(0, 0, 255), '#0000FF');
    });

    it('should return undefined for negative values', function() {
        assert.isUndefined(rgbToHexColor(-1, 0, 0));
        assert.isUndefined(rgbToHexColor(0, -1, 0));
        assert.isUndefined(rgbToHexColor(0, 0, -1));
    });

    it('should return undefined for values greater than 255', function() {
        assert.isUndefined(rgbToHexColor(256, 0, 0));
        assert.isUndefined(rgbToHexColor(0, 256, 0));
        assert.isUndefined(rgbToHexColor(0, 0, 256));
    });

    it('should return undefined for non-integer values', function() {
        assert.isUndefined(rgbToHexColor(0.5, 0, 0));
        assert.isUndefined(rgbToHexColor(0, 0.5, 0));
        assert.isUndefined(rgbToHexColor(0, 0, 0.5));
    });

    it('should return undefined for non-numeric inputs', function() {
        assert.isUndefined(rgbToHexColor('255', 0, 0));
        assert.isUndefined(rgbToHexColor(255, '0', 0));
        assert.isUndefined(rgbToHexColor(255, 0, '0'));
        assert.isUndefined(rgbToHexColor([], {}, null));
    });
})