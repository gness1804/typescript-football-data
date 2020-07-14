"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const matches = fs_1.readFileSync('football.csv', {
    encoding: "utf-8",
})
    .split('\n')
    .map((entry) => entry.split(','));
//# sourceMappingURL=index.js.map