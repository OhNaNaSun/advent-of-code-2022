import inputData from "./data.js";
import { chunk } from "lodash-es";
const testData = [
	"vJrwpWtwJgWrhcsFMMfFFhFp",
	"jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
	"PmmdzqPrVvPwwTWBwg",
	"wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
	"ttgJtRGJQctTZtZT",
	"CrZsJsPPZsGzwwsLwLmpwMDw",
];
const data = inputData;
function getPriority(char) {
	return char === char.toLowerCase()
		? char.charCodeAt(0) - 96
		: char.charCodeAt(0) - 38;
}
// part 1
const sum1 = data.reduce((pre, item) => {
	const [part1, part2] = chunk(item, item.length / 2);
	const common = part2.find((e) => part1.includes(e));
	return pre + getPriority(common);
}, 0);
console.log(sum1);
// part 2
const chunks = chunk(data, 3);
const sum2 = chunks.reduce((pre, item) => {
	const [[...group1], [...group2], [...group3]] = item;
	const common = group1.find((e) => group2.includes(e) && group3.includes(e));
	return pre + getPriority(common);
}, 0);
console.log(sum2);
