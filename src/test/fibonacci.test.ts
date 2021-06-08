import {FibonacciAtPos} from "../main/fibonacci";

 describe('Test Fibonacci at a position', () => {
    it.each(
        [[0,0],
            [1,1],
            [2,1],
            [3,2],
            [4,3],
            [5,5],
            [6,8],
            [7,13],
            [8,21],
            [9,34],
            [10,55],
            [11,89],
            [12,144],
            [13,233],
            [14,377],
            [15,610],
            [18,2584],
            [20,6765],
            [28,317811]])
        ("Should return %i when the position is %i", (position:number, expected:number) =>{
            expect(FibonacciAtPos(position)).toBe(expected);
        })
 })
