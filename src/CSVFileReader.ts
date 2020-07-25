import { readFileSync } from 'fs';
import { DataReaderI } from './types';

export class CSVFileReader implements DataReaderI {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((entry: string): string[] => entry.split(','));
  }
}
