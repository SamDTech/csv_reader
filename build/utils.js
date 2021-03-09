"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateStr) {
    // 28/10/2020
    var datePart = dateStr.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};
exports.dateStringToDate = dateStringToDate;
