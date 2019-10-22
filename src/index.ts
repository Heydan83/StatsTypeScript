// import { ConsoleReport } from './reportTargets/ConsoleReport';
import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';
// import { MatchResult } from './MatchResult';

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// summary.buidlAndPrintReport(matchReader.matches);
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buidlAndPrintReport(matchReader.matches);

// matchReader.matches

// const reader = new MatchReader('football.csv');
// reader.read();

//fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// })
//   .split('\n')
//   .map((row : string): string[] => {
//     return row.split(',');
//   });

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D'
// };

// // enum - enumeration
// enum MatchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D'
// };

// console.log(`Man United won ${manUnitedWins} games`);