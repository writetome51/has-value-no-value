"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var notDefined = require("./index").notDefined;
var isDefined = require("./index").isDefined;


if (isDefined([]))
	console.log('test 1 passed');
else
	console.log('test 1 FAILED');

if (isDefined({}))
	console.log('test 2 passed');
else
	console.log('test 2 FAILED');

if (isDefined(''))
	console.log('test 3 passed');
else
	console.log('test 3 FAILED');

if (isDefined(0))
	console.log('test 4 passed');
else
	console.log('test 4 FAILED');

if (isDefined(false))
	console.log('test 5 passed');
else
	console.log('test 5 FAILED');

if (isDefined(function(){}))
	console.log('test 6 passed');
else
	console.log('test 6 FAILED');

if (notDefined(null))
	console.log('test 7 passed');
else
	console.log('test 7 FAILED');

if (notDefined(undefined))
	console.log('test 8 passed');
else
	console.log('test 8 FAILED');

if (notDefined(10))
	console.log('test 9 FAILED');
else
	console.log('test 9 passed');
