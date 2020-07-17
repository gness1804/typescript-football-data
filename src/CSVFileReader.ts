import { readFileSync } from 'fs';

interface CSVFileReaderI {
  fileName: string;
  data: string[][];
  getDataFromFile: () => string[][];
}

export class CSVFileReader implements CSVFileReaderI {
  data: string[][];

  constructor(public fileName: string) {
    this.data = [];
  }

  private read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((entry: string): string[] => entry.split(','));
  }

  getDataFromFile(): string[][] {
    this.read();
    return this.data;
  }
}
