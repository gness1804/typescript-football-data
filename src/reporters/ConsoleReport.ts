import { ReporterI } from '../types';

export class ConsoleReport implements ReporterI {
  print(report: string): void {
    // eslint-disable-next-line no-console
    console.info(report);
  }
}
