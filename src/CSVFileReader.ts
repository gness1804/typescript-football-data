import { readFileSync } from 'fs';
import { CSVFileReaderI, GameResult, GameTuple } from './types';

export abstract class CSVFileReader implements CSVFileReaderI {
  data: GameTuple[];

  constructor(public fileName: string) {
    this.data = [];
  }

  abstract mapRow(row: string[]): GameTuple;

  protected read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((entry: string): string[] => entry.split(','))
      .map(this.mapRow);
  }

  getDataFromFile(): GameTuple[] {
    this.read();
    return this.data;
  }
}
