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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s: string, k: number): string {
    // Write your code here
    let original = '';
    let deciphered = '';
    
    for (let i = 0; i < s.length; i++) {
        original = s[i];
        
        if (original.match(/[a-z]/i)) {
            const newStr = original.charCodeAt(0);
            
            if (newStr >= 65 && newStr <= 90) {
                original = String.fromCharCode(((newStr - 65 + k) % 26) + 65);
            }
            else if (newStr >= 97 && newStr <= 122) {
                original = String.fromCharCode(((newStr - 97 + k) % 26) + 97);
            }
        }
        deciphered += original;
    }
    return deciphered;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const s: string = readLine();

    const k: number = parseInt(readLine().trim(), 10);

    const result: string = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
