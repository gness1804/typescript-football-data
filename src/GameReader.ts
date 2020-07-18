import { CSVFileReader } from './CSVFileReader';
import { GameResult, GameTuple } from './types';
import { dateStringToDate } from './utils';

export class GameReader extends CSVFileReader {
  mapRow(row: string[]): GameTuple {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as GameResult,
      row[6],
    ];
  }
}
