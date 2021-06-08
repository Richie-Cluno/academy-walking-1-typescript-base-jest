import {FibonacciAtPos} from "../main/fibonacci";

describe('Test Fibonacci at a position', () => {
    it("Should return 1 when the position is 1", () => {
        let position = 1;
        expect(FibonacciAtPos(position)).toBe(1);
    })
})