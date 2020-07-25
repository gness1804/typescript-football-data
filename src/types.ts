export enum GameResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export interface GameReaderI {
  reader: DataReaderI;
  loadGames: () => void;
}

export interface DataReaderI {
  read: () => void;
  data: string[][];
}

export type GameTuple = [
  Date,
  string,
  string,
  number,
  number,
  GameResult,
  string,
];
