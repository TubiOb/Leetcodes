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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s: string): number {
    // Write your code here
    let word = s.split('');
    const unique = new Set(word);
    word = Array.from(unique);
    let total = 0;
    let maxLength = 0;
    let combined = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = i +1; j < word.length; j++) {
            combined.push([word[i], word[j]]);
        }
    }
    for (let i = 0; i < combined.length; i++) {
        const innerArray = combined[i];
        let filtered = s
            .split('')
            .filter(char => innerArray.includes(char))
        const hasConsecutiveDuplicates = filtered.some((item, i) => item === filtered[i + 1]);
        if (!hasConsecutiveDuplicates && filtered.length > maxLength) {
            console.log(filtered)
            maxLength = filtered.length;
            total = maxLength;
        }
    }
        
    return total;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const l: number = parseInt(readLine().trim(), 10);

    const s: string = readLine();

    const result: number = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
