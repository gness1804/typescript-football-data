"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const utils_1 = require("./utils");
class CSVFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.readFileSync(this.fileName, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((entry) => entry.split(','))
            .map((row) => {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
    getDataFromFile() {
        this.read();
        return this.data;
    }
}
exports.CSVFileReader = CSVFileReader;
//# sourceMappingURL=CSVFileReader.js.map