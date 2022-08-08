"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_refactoringWithGeneric_1 = require(".//CsvFileReader-refactoringWithGeneric");
const util_1 = require("../util");
class MatchReader extends CsvFileReader_refactoringWithGeneric_1.CsvFileReaderRefactoringWithGeneric {
    mapRow(row) {
        return [
            (0, util_1.dateStingToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
