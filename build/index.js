"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const types_1 = require("./types");
const GameReader_1 = require("./GameReader");
const genericReader = new CSVFileReader_1.CSVFileReader('football.csv');
const gameReader = new GameReader_1.GameReader(genericReader);
gameReader.loadGames();
const { games } = gameReader;
const dateOfFirstMatch = games[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}.`);
let count = 0;
for (const game of games) {
    if ((game[1] === 'Man United' && game[5] === types_1.GameResult.HomeWin) ||
        (game[2] === 'Man United' && game[5] === types_1.GameResult.AwayWin))
        count++;
}
/* eslint-disable-next-line no-console */
console.info(`Man United won ${count} games.`);
//# sourceMappingURL=index.js.map