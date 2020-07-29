import { AnalyzerI, OutputTarget } from './types';

export class Summary {
  constructor(public analyzer: AnalyzerI, public outputTarget: OutputTarget) {}
}
