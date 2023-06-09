import { dirname, fromFileUrl, resolve } from "https://deno.land/std@0.191.0/path/mod.ts";

export default function (metaUrl: string) {
    return Deno.readTextFileSync(resolve(dirname(fromFileUrl(metaUrl)), "input.txt"));
}
