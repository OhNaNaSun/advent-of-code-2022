import { inputCount, inputStacks, inputOperations } from "./data.js";
import { chunk, zip } from "lodash-es";
const testStacks = ["    [D]    ", "[N] [C]    ", "[Z] [M] [P]"];
const testOperations = [
	"move 1 from 2 to 1",
	"move 3 from 1 to 3",
	"move 2 from 2 to 1",
	"move 1 from 1 to 2",
];
const stacks = testStacks,
	operations = testOperations,
	count = 3;
const arr = stacks.map((str) => {
	const a = chunk(str, Math.ceil(str.length / count)).map((b) =>
		b.join("").replace(/\[|\]|\s/g, "")
	);
	return a;
});
const stackArr = zip(...arr).map((i) => i.filter(Boolean));
operations.forEach((item) => {
	const [, times, , fromS, , toS] = item.split(" ");
	const slice1 = stackArr[fromS - 1].splice(0, times);
	// part 1:
	stackArr[toS - 1].unshift(...slice1.reverse());
	// part 2:
	// stackArr[toS - 1].unshift(...slice1);
});
console.log(stackArr.map((a) => a[0]).join(""));
