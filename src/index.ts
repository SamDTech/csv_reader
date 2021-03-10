import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { HtmlReport } from './reportTarget/HtmlReport';
import { Summary } from './Summary';

// Create an Object that satisfy the data reader interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the DataReader interface

const matchReader = new MatchReader(csvFileReader);

matchReader.load();


const consoleReport = new ConsoleReport()

const htmlReport = new HtmlReport()

const winAnalysis = new WinsAnalysis('Man United')

const summary = new Summary(winAnalysis, htmlReport)


summary.buildAndPrintReport(matchReader.matches)


