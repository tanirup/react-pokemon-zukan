// src/queryKeys.ts
import { createQueryKeys, mergeQueryKeys } from "@lukemorales/query-key-factory";

const pokemonQueryKeys = createQueryKeys("pokemon", {
    list: () => ["list"],
    detail: (id: number) => ["detail", id],
});

export const apiQueryKeys = mergeQueryKeys(pokemonQueryKeys);