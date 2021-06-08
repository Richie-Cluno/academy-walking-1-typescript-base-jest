import {FibonacciAtPos} from "../main/fibonacci";

describe('Test Fibonacci at a position', () => {
    it("Should return 0 when the position is 0", () => {
        let position = 0;
        expect(FibonacciAtPos(position)).toBe(0);
    })

    it("Should return 1 when the position is 1", () => {
        let position = 1;
        expect(FibonacciAtPos(position)).toBe(1);
    })

    it("Should return 1 when the position is 2", () => {
        let position = 2;
        expect(FibonacciAtPos(position)).toBe(1);
    })
})