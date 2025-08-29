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
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */


function weightedUniformStrings(s: string, queries: number[]): string[] {
    // Write your code here
    const letters = s.toLowerCase();
    const repeatedChars = [];
    const repeatedCharsValue:any = [];
    let currentRepeat = "";
    let result:any = [];

    for (let i = 0; i < letters.length; i++) {
        const char = letters[i];
        if (i > 0 && char === letters[i - 1]) {
            currentRepeat += char;
        }
        else {
            if (currentRepeat.length > 0) {
                const asciiValue = currentRepeat.charCodeAt(0);
                const value =  asciiValue - 96;
                for (let j = 1; j <= currentRepeat.length; j++) {    
                    const weight = j * value;
                    repeatedCharsValue.push(weight);
                }
                if (currentRepeat.length > 1) {
                    repeatedChars.push(currentRepeat);
                }
            }
            currentRepeat = char;
        }

    }

    if (currentRepeat.length >= 1) {
        const asciiValue = currentRepeat.charCodeAt(0);
        const value =  asciiValue - 96;
        for (let j = 1; j <= currentRepeat.length; j++) {    
            const weight = j * value;
            repeatedCharsValue.push(weight);
        }
        if (currentRepeat.length > 1) {
            repeatedChars.push(currentRepeat);
        }
    }
    for (let query of queries) {
        const check = repeatedCharsValue.includes(query);
        result.push(check === true ? 'Yes' : 'No');
    }
    return result;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const queriesCount: number = parseInt(readLine().trim(), 10);

    let queries: number[] = [];

    for (let i: number = 0; i < queriesCount; i++) {
        const queriesItem: number = parseInt(readLine().trim(), 10);

        queries.push(queriesItem);
    }

    const result: string[] = weightedUniformStrings(s, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
