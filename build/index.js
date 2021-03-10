"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTarget/ConsoleReport");
var Summary_1 = require("./Summary");
// Create an Object that satisfy the data reader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the DataReader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var consoleReport = new ConsoleReport_1.ConsoleReport();
var winAnalysis = new WinsAnalysis_1.WinsAnalysis('Man United');
var summary = new Summary_1.Summary(winAnalysis, consoleReport);
summary.buildAndPrintReport(matchReader.matches);
