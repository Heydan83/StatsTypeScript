import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    // for (let match of reader.data) {
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin /* homeWin H */) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin /*  awayWin A */) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}