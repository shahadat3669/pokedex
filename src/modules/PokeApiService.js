import PokeModel from './PokeModel.js';

class PokeApiService {
  #baseUrl;

  constructor() {
    this.#baseUrl = new URL('/api/v2/pokemon/', 'https://pokeapi.co');
  }

  getSomePokemonData = async (start, numItems) => {
    const pokemons = [];

    for (let id = 0; id < numItems; id += 1) {
      pokemons.push(this.getPokemonData(start + id));
    }

    return Promise.all(pokemons);
  }

  getPokemonData = async (pokeId) => {
    const pokedata = await fetch(this.#baseUrl + pokeId)
      .then((response) => response.json());
    const { id, name, sprites, types } = pokedata;
    const pokeTypes = [];
    types.forEach((element) => {
      pokeTypes.push(element.type.name);
    });
    return new PokeModel(id, name, sprites.other.dream_world.front_default, pokeTypes);
  }
}
export default PokeApiService;