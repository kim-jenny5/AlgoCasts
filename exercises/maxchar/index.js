// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const obj = {};

	for (const char of str) {
		obj[char] ? obj[char]++ : (obj[char] = 1);
	}

	let count = 0;
	let char = "";

	for (const key in obj) {
		if (obj[key] > count) {
			count = obj[key];
			char = key;
		}
		// } else {
		// 	count;
		// }
	}

	// for (const o of Object.entries(obj)) {
	// 	if (o[1] === count) {
	// 		return o[0];
	// 	}
	// }
	return char;
}

maxChar("abcccccccd");

module.exports = maxChar;
