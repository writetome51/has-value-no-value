"use strict";
Object.defineProperty(exports, "__esModule", {value: true});


function noValue(arg) {
	return (arg === undefined || arg === null);
}
exports.noValue = noValue;


// arg is considered defined if its value is not undefined or null.

function hasValue(arg) {
	return !(noValue(arg));
}
exports.hasValue = hasValue;
