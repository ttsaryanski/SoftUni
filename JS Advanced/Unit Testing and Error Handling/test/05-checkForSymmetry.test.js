import { expect } from "chai";
import { isSymmetric } from "../05-checkForSymmetry.js";

describe('isSymetric', () => {
    it('return true if array is symmetric', () => {
        const input = [1, 2, 1];
        const result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it('return false if array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('return throw error if input is another type', () => {
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric('1, 2, 1')).to.be.false;
    });

    it('return true if input is empty array', () => {
        expect(isSymmetric([])).to.be.true;
    })

    it('return throw error if input is another type', () => {
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric(1, 2, 1)).to.be.false;
    });

    it('return false if input is undefined', () => {
        expect(isSymmetric(undefined)).to.be.false;
    })
    
    it('return false if input is number and strings', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    })
    
});

// describe ('isSymetric', () => {
//     it('return ')
// })