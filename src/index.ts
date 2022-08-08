import {MatchReader} from "./MatchReader";
import {Summary} from './Summary';

const matchReader = MatchReader.fromCsv('football.csv')

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

