import { DataReaderI, GameReaderI, GameResult, GameData } from './types';
import { dateStringToDate } from './utils';

export class GameReader implements GameReaderI {
  games: GameData[] = [];

  constructor(public reader: DataReaderI) {}

  private getDataFromGenericReader(): void {
    this.reader.read();
  }

  loadGames(): void {
    this.getDataFromGenericReader();
    const { data } = this.reader;
    this.games = data.map(
      (row: string[]): GameData => {
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
}
