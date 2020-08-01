"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const GameReader_1 = require("./GameReader");
const Summary_1 = require("./Summary");
const genericReader = new CSVFileReader_1.CSVFileReader('football.csv');
const gameReader = new GameReader_1.GameReader(genericReader);
gameReader.loadGames();
const { games } = gameReader;
const dateOfFirstMatch = games[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}.`);
const summary = Summary_1.Summary.createSummaryWithHtml('Everton', './report.html');
summary.buildAndPrintReport(games);
//# sourceMappingURL=index.js.map