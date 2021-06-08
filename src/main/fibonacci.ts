export function FibonacciAtPos(position: number): number{
    if (position === 0){
        return 0;
    }
    if(position === 1) {
        return 1;
    }
    let i = 2;
    let a = 0;
    let b = 1
    let result = 0
    while(i <= position) {
        result = a + b;
        a = b;
        b = result;
        i = i + 1;
    }
    return result;
}
