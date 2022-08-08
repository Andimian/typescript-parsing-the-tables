"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReaderRefactoringWithGeneric = void 0;
const fs_1 = __importDefault(require("fs"));
/*Испльзуем абстрактный класс с дженериком типом для того, чтобы сделать наш код reusable*/
class CsvFileReaderRefactoringWithGeneric {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReaderRefactoringWithGeneric = CsvFileReaderRefactoringWithGeneric;
