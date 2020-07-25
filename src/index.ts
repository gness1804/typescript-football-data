import { CSVFileReader } from './CSVFileReader';
import { GameResult } from './types';
import { GameReader } from './GameReader';

const genericReader = new CSVFileReader('football.csv');
const gameReader = new GameReader(genericReader);
gameReader.loadGames();

const { games } = gameReader;

const dateOfFirstMatch = games[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}.`);

let count = 0;

for (const game of games) {
  if (
    (game[1] === 'Man United' && game[5] === GameResult.HomeWin) ||
    (game[2] === 'Man United' && game[5] === GameResult.AwayWin)
  )
    count++;
}

/* eslint-disable-next-line no-console */
console.info(`Man United won ${count} games.`);
