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
    let c = 0
    while(i <= position) {
        c = a + b;
        a = b;
        b = c;
        i = i + 1;
    }
    return c;
}
