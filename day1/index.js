import { sum } from "lodash-es";
import { inputData } from "./data.js";
let maxSum = 0;
const sumArr = inputData.map((items) => {
	const sumNum = sum(items.map((i) => +i));
	maxSum = Math.max(sumNum, maxSum);
	return sumNum;
});
const top3 = sumArr.sort((a, b) => b - a).slice(0, 3);
console.log(maxSum);
console.log(sum(top3));
