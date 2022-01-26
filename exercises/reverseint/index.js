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
	// NOTE: SOLUTION 1
	// let str;
	// n < 0 ? (str = -n) : (str = n);
	// const arr = [...str.toString()];
	// const int = n < 0 ? -arr.reverse().join("") : arr.reverse().join("");
	// return parseInt(int);
	// NOTE: SOLUTION 2
	// const int = n < 0 ? -n : n;
	// const solution = parseInt(arr.reverse().join(""));
	// return n < 0 ? -solution : solution;
	// NOTE: SOLUTION 3
	const num = Math.abs(n);
	const arr = [...num.toString()];
	const int = parseInt(arr.reverse().join(""));
	return n < 0 ? -1 * int : int;
}

reverseInt(-15);

module.exports = reverseInt;
