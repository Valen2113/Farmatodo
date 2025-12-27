import { test, request } from '@playwright/test';
import { PokemonApi } from '../api/pokemon.api';
import { selectionSort } from '../utils/sorting.util';
import { PokemonData } from '../models/pokemon.model';

test('Prueba de integración - Evolución de Squirtle', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://pokeapi.co/api/v2',
  });

  const pokemonApi = new PokemonApi(apiContext);

  const squirtle = await pokemonApi.getPokemon('7');
  const species = await pokemonApi.getByUrl(squirtle.species.url);
  const evolutionChain = await pokemonApi.getByUrl(
    species.evolution_chain.url
  );

  const names: string[] = [];
  let current = evolutionChain.chain;

  while (current) {
    names.push(current.species.name);
    current = current.evolves_to[0];
  }

  const data: PokemonData[] = [];

  for (const name of names) {
    const pokemon = await pokemonApi.getPokemon(name);
    data.push({ name: pokemon.name, weight: pokemon.weight });
  }

  const ordered = selectionSort(data);

  console.log('Resultado ordenado:');
  ordered.forEach(p =>
    console.log(`${p.name} tiene un peso de: ${p.weight}`)
  );
});