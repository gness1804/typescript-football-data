import { CSVFileReader } from './CSVFileReader';
import { GameReader } from './GameReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HtmlReport } from './reporters/HtmlReport';

const genericReader = new CSVFileReader('football.csv');
const gameReader = new GameReader(genericReader);
gameReader.loadGames();

const { games } = gameReader;

const dateOfFirstMatch = games[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}.`);

const analyzer = new WinsAnalysis('Chelsea');
const reporter = new ConsoleReport();

new Summary(analyzer, reporter).buildAndPrintReport(games);

const analyzer2 = new WinsAnalysis('Man United');
const reporter2 = new HtmlReport('./report.html');

new Summary(analyzer2, reporter2).buildAndPrintReport(games);
