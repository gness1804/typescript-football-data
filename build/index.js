"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const GameReader_1 = require("./GameReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reporters/ConsoleReport");
const HtmlReport_1 = require("./reporters/HtmlReport");
const genericReader = new CSVFileReader_1.CSVFileReader('football.csv');
const gameReader = new GameReader_1.GameReader(genericReader);
gameReader.loadGames();
const { games } = gameReader;
const dateOfFirstMatch = games[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}.`);
const analyzer = new WinsAnalysis_1.WinsAnalysis('Chelsea');
const reporter = new ConsoleReport_1.ConsoleReport();
new Summary_1.Summary(analyzer, reporter).buildAndPrintReport(games);
const analyzer2 = new WinsAnalysis_1.WinsAnalysis('Man United');
const reporter2 = new HtmlReport_1.HtmlReport('./report.html');
new Summary_1.Summary(analyzer2, reporter2).buildAndPrintReport(games);
//# sourceMappingURL=index.js.map