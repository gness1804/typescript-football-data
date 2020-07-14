import {readFileSync} from 'fs';

const matches: string[][] = readFileSync('football.csv', {
    encoding: "utf-8",
})
    .split('\n')
    .map((entry: string): string[] =>
    entry.split(','))
