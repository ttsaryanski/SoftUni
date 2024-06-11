import { assert, expect } from "chai";
import { workforceManagement } from '../03-workforceManagement.js';

describe("Tests for workforceManagement", () => {
  describe("recruitStaff", () => {
    it("should recruit a Developer with sufficient experience", () => {
      expect(workforceManagement.recruitStaff("John", "Developer", 4)).to.equal("John has been successfully recruited for the role of Developer.");
    });

    it("should not recruit a Developer with insufficient experience", () => {
      expect(workforceManagement.recruitStaff("Jane", "Developer", 3)).to.equal("Jane is not suitable for this role.");
    });

    it("should throw an error for roles other than Developer", () => {
      expect(() => workforceManagement.recruitStaff("Jim", "Manager", 5)).to.throw("We are not currently hiring for this role.");
    });
  });

  describe("computeWages", () => {
    it("should calculate wages correctly for hours within limit", () => {
      expect(workforceManagement.computeWages(160)).to.equal(160 * 18);
    });

    it("should calculate wages correctly with bonus for hours over the limit", () => {
      expect(workforceManagement.computeWages(170)).to.equal((170 * 18) + 1500);
    });

    it("should throw an error for invalid hours (negative number)", () => {
      expect(() => workforceManagement.computeWages(-5)).to.throw("Invalid hours");
    });

    it("should throw an error for invalid hours (not a number)", () => {
      expect(() => workforceManagement.computeWages("not a number")).to.throw("Invalid hours");
    });
  });

  describe("dismissEmployee", () => {
    it("should remove an employee at a valid index", () => {
      expect(workforceManagement.dismissEmployee(["Alice", "Bob", "Charlie"], 1)).to.equal("Alice, Charlie");
    });

    it("should throw an error for invalid workforce (not an array)", () => {
      expect(() => workforceManagement.dismissEmployee("not an array", 1)).to.throw("Invalid input");
    });

    it("should throw an error for invalid employee index (not a number)", () => {
      expect(() => workforceManagement.dismissEmployee(["Alice", "Bob", "Charlie"], "1")).to.throw("Invalid input");
    });

    it("should throw an error for out of bounds employee index", () => {
      expect(() => workforceManagement.dismissEmployee(["Alice", "Bob", "Charlie"], 3)).to.throw("Invalid input");
    });
  });
});
