import { readFileSync } from 'fs';

interface CSVFileReaderI {
  fileName: string;
  data: string[][];
  read: () => void;
}

export class CSVFileReader implements CSVFileReaderI {
  data: string[][];

  constructor(public fileName: string) {
    this.data = [];
  }

  read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((entry: string): string[] => entry.split(','));
  }
}
