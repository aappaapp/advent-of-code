export const input = await Deno.readTextFile("./input.txt");

export type Range = [number, number];

export function contains(array1: Range, array2: Range) {
    return array1[0] <= array2[0] && array1[1] >= array2[1];
}

let number = 0;
input.split(/\r?\n/).forEach((v) => {
    const [one, two] = v.split(",");
    const one2 = one.split("-").map((v) => Number(v)) as Range;
    const two2 = two.split("-").map((v) => Number(v)) as Range;

    number += contains(one2, two2) ? 1 : contains(two2, one2) ? 1 : 0;
});

console.log(number);
