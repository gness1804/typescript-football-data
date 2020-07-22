"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const GameReader_1 = require("./GameReader");
const matches = new GameReader_1.GameReader('football.csv').getDataFromFile();
const dateOfFirstMatch = matches[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}`);
let count = 0;
for (const match of matches) {
    if ((match[1] === 'Man United' && match[5] === types_1.GameResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === types_1.GameResult.AwayWin))
        count++;
}
/* eslint-disable-next-line no-console */
console.info(`Man United won ${count} games.`);
//# sourceMappingURL=index.js.map