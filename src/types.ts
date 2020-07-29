export interface AnalyzerI {
  run(games: GameData[]): string;
}

export interface DataReaderI {
  read: () => void;
  data: string[][];
}

export type GameData = [
  Date,
  string,
  string,
  number,
  number,
  GameResult,
  string,
];

export interface GameReaderI {
  reader: DataReaderI;
  loadGames: () => void;
}

export enum GameResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export interface ReporterI {
  print(report: string): void;
}

export interface SummaryI {
  analyzer: AnalyzerI;
  reporter: ReporterI;
  buildAndPrintReport: (data: GameData[]) => void;
}
