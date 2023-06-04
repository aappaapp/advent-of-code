const input = await Deno.readTextFile("./input.txt");

function letterToNumber(letter: string): number {
    switch (letter) {
        case "A":
            return 1;
        case "B":
            return 2;
        case "C":
            return 3;
        case "X":
            return 1;
        case "Y":
            return 2;
        case "Z":
            return 3;
    }
    return 0;
}

let score = 0;

input.split(/\r?\n/).forEach((v) => {
    const [opp, me] = v.split(" ");
    const o = letterToNumber(opp);
    const m = letterToNumber(me);
    switch (o) {
        case 1:
            if (m === 2) score += 6;
            break;
        case 2:
            if (m === 3) score += 6;
            break;
        case 3:
            if (m === 1) score += 6;
            break;
    }
    if (o === m) score += 3;
    score += m;
    console.log(o, m);
});
console.log(score);
