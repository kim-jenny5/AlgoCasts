// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// let str;
	// n < 0 ? (str = -n) : (str = n);
	// const arr = [...str.toString()];
	// const int = n < 0 ? -arr.reverse().join("") : arr.reverse().join("");
	// return parseInt(int);
	const int = n < 0 ? -n : n;
	const arr = [...int.toString()];
	const solution = parseInt(arr.reverse().join(""));
	return n < 0 ? -solution : solution;
}

reverseInt(-15);

module.exports = reverseInt;
