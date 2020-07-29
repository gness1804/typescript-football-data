import { CSVFileReader } from './CSVFileReader';
import { GameResult } from './types';
import { GameReader } from './GameReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';

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
