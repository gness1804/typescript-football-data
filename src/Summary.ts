import { AnalyzerI, GameData, ReporterI, SummaryI } from './types';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';

export class Summary implements SummaryI {
  constructor(public analyzer: AnalyzerI, public reporter: ReporterI) {}

  buildAndPrintReport(data: GameData[]): void {
    // use analyzer to input team and get out a statement of results
    const statement = this.analyzer.run(data);
    // use reporter to handle the results
    this.reporter.print(statement);
  }
}
