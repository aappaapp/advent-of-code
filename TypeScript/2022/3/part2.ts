import { input, getPriority } from "./part1.ts";

console.log(
    input
        .split(/\r?\n/)
        .reduce(
            (p, c, i) => ((p[Math.floor(i / 3)] ??= []), p[Math.floor(i / 3)].push(c), p),
            [] as string[][]
        )
        .reduce((p, [a, b, c]) => {
            return p + getPriority(a.split("").find((v) => b.includes(v) && c.includes(v))!);
        }, 0)
);
