export function FibonacciAtPos(position: number): number{
    if (position < 2) return position;

    return FibonacciAtPos(position - 1) + FibonacciAtPos(position - 2);
}
