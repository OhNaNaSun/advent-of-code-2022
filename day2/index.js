import inputData from "./data.js";
const testData = ["A Y", "B X", "C Z"];
const scoreMap = {
	X: 1,
	Y: 2,
	Z: 3,
};
const meMap = {
	AY: "X",
	BY: "Y",
	CY: "Z",
	AZ: "Y",
	BZ: "Z",
	CZ: "X",
	AX: "Z",
	BX: "X",
	CX: "Y",
};
const winMap = { AY: 6, CX: 6, BZ: 6, AX: 3, BY: 3, CZ: 3 };
const sum = inputData.reduce((pre, item) => {
	const [a, b] = item.split(" ");
	// part 1:
	// const me = b;
	// part 2:
	const me = meMap[item.replace(" ", "")];
	return pre + scoreMap[me] + (winMap[a + me] || 0);
}, 0);
console.log(sum);
