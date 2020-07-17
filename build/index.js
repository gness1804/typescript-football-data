"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const types_1 = require("./types");
const matches = new CSVFileReader_1.CSVFileReader('football.csv').getDataFromFile();
let count = 0;
for (const match of matches) {
    if ((match[1] === 'Man United' && match[5] === types_1.GameResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === types_1.GameResult.AwayWin))
        count++;
}
/* eslint-disable-next-line no-console */
console.info(`Man United won ${count} games.`);
//# sourceMappingURL=index.js.map