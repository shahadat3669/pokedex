import PokeApiService from './PokeApiService.js';

async function test() {
  const cont = document.getElementById('poke-cards-cont');
  const pokeService = new PokeApiService();
  const pokeData = await pokeService.getSomePokemonData(125, 30);

  pokeData.forEach((element) => {
    cont.appendChild(element.view.ui);
  });
}
export default test;
