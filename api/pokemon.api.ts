import { APIRequestContext, expect } from '@playwright/test';

export class PokemonApi {
  constructor(private request: APIRequestContext) {}

  async getPokemon(id: string) {
    const res = await this.request.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
  
    expect(res.status()).toBe(200);
    return res.json();
  }
  

  async getByUrl(url: string) {
    const res = await this.request.get(url);
    expect(res.status()).toBe(200);
    return res.json();
  }
}
