import inputData from "./data.js";
const testData = [
	"2-4,6-8",
	"2-3,4-5",
	"5-7,7-9", //
	"2-8,3-7", //
	"6-6,4-6", //
	"2-6,4-8", //
];
const data = inputData;
const sum = data.reduce((pre, item) => {
	const [[f1, f2], [s1, s2]] = item
		.split(",")
		.map((a) => a.split("-").map(Number));
	// part 1:
	// return pre + ((f1 <= s1 && f2 >= s2) || (f1 >= s1 && f2 <= s2));
	// part 2:
	return pre + !(f2 < s1 || s2 < f1);
}, 0);
console.log(sum);
