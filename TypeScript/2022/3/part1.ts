export const input = await Deno.readTextFile("./input.txt");

export function getPriority(letter: string) {
    return letter >= "a" && letter <= "z"
        ? letter.charCodeAt(0) - 96
        : letter >= "A" && letter <= "Z"
        ? letter.charCodeAt(0) - 38
        : 0;
}

let sum = 0;
input.split(/\r?\n/).forEach((v) => {
    const firstHalf = v.substring(0, v.length / 2);
    const lastHalf = v.substring(v.length / 2);
    const repeated = firstHalf.split("").find((v) => lastHalf.includes(v))!;
    const priority = getPriority(repeated);
    sum += priority;
});
console.log(sum);
