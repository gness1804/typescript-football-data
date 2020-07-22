export enum GameResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export interface CSVFileReaderI {
  fileName: string;
}

export interface GameReaderI {
  mapRow: (row: string[]) => GameTuple;
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
