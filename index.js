export function noValue(arg) {
	return (arg === undefined || arg === null);
}

export function hasValue(arg) {
	return !(noValue(arg));
}
