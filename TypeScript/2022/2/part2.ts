import { input } from "./part1.ts";

function calca(v: string): number {
    switch (v) {
        case "A X":
            return 3;
        case "A Y":
            return 4;
        case "A Z":
            return 8;
        case "B X":
            return 1;
        case "B Y":
            return 5;
        case "B Z":
            return 9;
        case "C X":
            return 2;
        case "C Y":
            return 6;
        case "C Z":
            return 7;
    }
    return 0;
}

let score = 0;

input.split(/\r?\n/).forEach((v) => {
    score += calca(v);
});
console.log(score);
