import { readFileSync } from 'fs';
import { dateStringToDate } from './utils';
import { CSVFileReaderI, GameResult, GameTuple } from './types';

export class CSVFileReader implements CSVFileReaderI {
  data: GameTuple[];

  constructor(public fileName: string) {
    this.data = [];
  }

  private read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((entry: string): string[] => entry.split(','))
      .map(
        (row: string[]): GameTuple => {
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as GameResult,
            row[6],
          ];
        },
      );
  }

  getDataFromFile(): GameTuple[] {
    this.read();
    return this.data;
  }
}
