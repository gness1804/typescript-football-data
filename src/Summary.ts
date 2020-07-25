import { Analyzer, OutputTarget } from './types';

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
