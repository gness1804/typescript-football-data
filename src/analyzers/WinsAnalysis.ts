import { AnalyzerI, GameData, GameResult } from '../types';

export class WinsAnalysis implements AnalyzerI {
  constructor(public team: string) {}

  run(games: GameData[]): string {
    let wins = 0;

    for (const game of games) {
      if (
        (game[1] === this.team && game[5] === GameResult.HomeWin) ||
        (game[2] === this.team && game[5] === GameResult.AwayWin)
      )
        wins++;
    }

    return `${this.team} won ${wins} games.`;
  }
}
