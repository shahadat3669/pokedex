import getPokemonData from './getPokemonData.js';

const generatePokemon = async () => {
  const result = await getPokemonData();
  const { abilities, height, weight, id, name, stats, types, sprites } = result;
  const img = sprites.other.dream_world.front_default;
};

export default generatePokemon;
