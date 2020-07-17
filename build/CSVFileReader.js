"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
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
            .map((entry) => entry.split(','));
    }
}
exports.CSVFileReader = CSVFileReader;
//# sourceMappingURL=CSVFileReader.js.map