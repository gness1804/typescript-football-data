import { GameReader } from './GameReader';
import { Summary } from './Summary';

const gameReader = GameReader.buildWithCsv('football.csv');
gameReader.loadGames();

const { games } = gameReader;

const dateOfFirstMatch = games[0][0];
/* eslint-disable-next-line no-console */
console.info(`The first match took place on ${dateOfFirstMatch}.`);

const summary = Summary.createSummaryWithHtml('Everton', './report.html');
summary.buildAndPrintReport(games);
