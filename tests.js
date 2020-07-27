import {hasValue, noValue} from './index.js';


if (hasValue([]))
	console.log('test 1 passed');
else
	console.log('test 1 FAILED');


if (hasValue({}))
	console.log('test 2 passed');
else
	console.log('test 2 FAILED');


if (hasValue(''))
	console.log('test 3 passed');
else
	console.log('test 3 FAILED');


if (hasValue(0))
	console.log('test 4 passed');
else
	console.log('test 4 FAILED');


if (hasValue(false))
	console.log('test 5 passed');
else
	console.log('test 5 FAILED');


if (hasValue(function() {
}))
	console.log('test 6 passed');
else
	console.log('test 6 FAILED');


if (noValue(null))
	console.log('test 7 passed');
else
	console.log('test 7 FAILED');


if (noValue(undefined))
	console.log('test 8 passed');
else
	console.log('test 8 FAILED');


let x = null;
if (noValue(x))
	console.log('test 10 passed');
else
	console.log('test 10 FAILED');


let y;
if (noValue(y))
	console.log('test 11 passed');
else
	console.log('test 11 FAILED');
