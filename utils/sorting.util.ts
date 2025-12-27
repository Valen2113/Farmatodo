import { PokemonData } from '../models/pokemon.model.ts';

export function selectionSort(data: PokemonData[]): PokemonData[] {
  const arr = [...data]; // copia para no mutar el original

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name < arr[min].name) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
