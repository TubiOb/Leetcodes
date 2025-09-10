'use strict';

import { WriteStream, createWriteStream } from "fs";
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

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n: number, password: string): number {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"
    let count = 0;
    let hasDigit = false;
    let isLower = false;
    let isUpper = false;
    let isSpecial = false;
    
    for (const pass of password) {    
        if(numbers.includes(pass)) {
            hasDigit = true;
        }
        if(lower_case.includes(pass)) {
            isLower = true;
        }
        if(upper_case.includes(pass)) {
            isUpper = true;
        }
        if(special_characters.includes(pass)) {
            isSpecial = true;
        }
    }
    if (password.length < 6) {    
        if(hasDigit == false) {
            count++;
        }
        if(isLower === false) {
            count++;
        }
        if(isUpper === false) {
            count++;
        }
        if(isSpecial === false) {
            count++;
        }
        // count = count + (6 - (n + count));
        count = Math.max(count, (6 - n))
    }
    if (password.length >= 6) {    
        if(hasDigit == false) {
            count++;
        }
        if(isLower === false) {
            count++;
        }
        if(isUpper === false) {
            count++;
        }
        if(isSpecial === false) {
            count++;
        }
    }
    return count;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const password: string = readLine();

    const answer: number = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
