import fs from "fs";

/*Испльзуем абстрактный класс с дженериком типом для того, чтобы сделать наш код reusable*/
export abstract class CsvFileReaderRefactoringWithGeneric<T> {
    data: T[] = [];

    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
            .map(this.mapRow)
    }
}