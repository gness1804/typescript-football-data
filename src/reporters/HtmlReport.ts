import { ReporterI } from '../types';
import { writeFileSync } from 'fs';

export class HtmlReport implements ReporterI {
  constructor(public outputFile: string) {}
  print(report: string): void {
    const html = `
      <div>
        <h1>Results:</h1>
        <p>${report}</p>
      </div>
    `;

    writeFileSync(this.outputFile, html);
  }
}
