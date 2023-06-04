import { elfs } from "./part1.ts";

const sorted = elfs.sort((a, b) => b - a);
sorted.length = 3;
console.log(sorted.reduce((p, c) => p + c, 0));
