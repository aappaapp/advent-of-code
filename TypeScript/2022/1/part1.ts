const input = await Deno.readTextFile("./input.txt");

export const elfs: number[] = [];
let currentElf = 0;
input.split(/\r?\n/).forEach((v) => {
    if (v === "") elfs.push(currentElf), (currentElf = 0);
    else currentElf += parseFloat(v);
});

console.log(Math.max(...elfs));
