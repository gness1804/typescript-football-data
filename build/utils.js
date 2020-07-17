"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = (dateString) => {
    const dateArr = dateString
        .split('/')
        .map((digitStr) => parseInt(digitStr, 10));
    const day = dateArr[0];
    const month = dateArr[1] - 1;
    const year = dateArr[2];
    return new Date(year, month, day);
};
//# sourceMappingURL=utils.js.map