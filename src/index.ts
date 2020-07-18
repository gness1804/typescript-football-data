import { CSVFileReader } from './CSVFileReader';
import { GameResult } from './types';
import { GameReader } from './GameReader';

const matches = new GameReader('football.csv').getDataFromFile();

const dateOfFirstMatch = matches[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}`);

let count = 0;

for (const match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === GameResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === GameResult.AwayWin)
  )
    count++;
}

/* eslint-disable-next-line no-console */
console.info(`Man United won ${count} games.`);
