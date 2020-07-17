export enum GameResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export interface CSVFileReaderI {
  fileName: string;
  data: GameTuple[];
  getDataFromFile: () => GameTuple[];
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
