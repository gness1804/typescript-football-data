"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const matches = new CSVFileReader_1.CSVFileReader('football.csv').getDataFromFile();
let count = 0;
var GameResult;
(function (GameResult) {
    GameResult["HomeWin"] = "H";
    GameResult["AwayWin"] = "A";
    GameResult["Draw"] = "D";
})(GameResult || (GameResult = {}));
for (const match of matches) {
    if ((match[1] === 'Man United' && match[5] === GameResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === GameResult.AwayWin))
        count++;
}
/* eslint-disable-next-line no-console */
console.info(`Man United won ${count} games.`);
//# sourceMappingURL=index.js.map