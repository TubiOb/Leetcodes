'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    
    const a: number = parseInt(inputLines[0].trim(), 10);
    const b: number = parseInt(inputLines[1].trim(), 10);
    
    main(a, b);
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main(a: number, b: number): number {
    // Enter your code here
    const sum = Number(a + b);
    console.log(sum)
    return sum;
}
