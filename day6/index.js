import inputData from "./data.js";
const testData = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
// part 1:
// const count = 4;
// part 2:
const count = 14;
const data = inputData;
const arr = data.split("");
const ans = arr.findIndex((item, index) => {
	const preArr = arr.slice(index - count, index);
	return preArr.length === count && new Set(preArr).size === preArr.length;
});
console.log(ans);
