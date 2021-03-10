import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { HtmlReport } from './reportTarget/HtmlReport';
import { Summary } from './Summary';


const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();


const consoleReport = new ConsoleReport()

const htmlReport = new HtmlReport()

const winAnalysis = new WinsAnalysis('Man United');

const summary = Summary.winsAnalysisAndPrintReport('Man United');


summary.buildAndPrintReport(matchReader.matches)


