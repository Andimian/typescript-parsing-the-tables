"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStingToDate = void 0;
const dateStingToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((item) => {
        return parseInt(item);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStingToDate = dateStingToDate;
