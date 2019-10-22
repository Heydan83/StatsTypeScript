"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ConsoleReport } from './reportTargets/ConsoleReport';
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzer/WinsAnalysis';
var Summary_1 = require("./Summary");
// import { HtmlReport } from './reportTargets/HtmlReport';
// import { MatchResult } from './MatchResult';
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// summary.buidlAndPrintReport(matchReader.matches);
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
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
