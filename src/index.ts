import { CSVFileReader } from './CSVFileReader';

const matches = new CSVFileReader('football.csv').getDataFromFile();

let count = 0;

enum GameResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

for (const match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === GameResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === GameResult.AwayWin)
  )
    count++;
}

/* eslint-disable-next-line no-console */
console.info(`Man United won ${count} games.`);
