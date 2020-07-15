"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const matches = fs_1.readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((entry) => entry.split(','));
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