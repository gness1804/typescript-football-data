import { readFileSync } from 'fs';
import { CSVFileReaderI, GameResult, GameTuple } from './types';

export abstract class CSVFileReader<T> implements CSVFileReaderI {
  data: T[];

  constructor(public fileName: string) {
    this.data = [];
  }

  abstract mapRow(row: string[]): T;

  protected read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((entry: string): string[] => entry.split(','))
      .map(this.mapRow);
  }

  getDataFromFile(): T[] {
    this.read();
    return this.data;
  }
}
