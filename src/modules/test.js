import PokeApiService from './PokeApiService.js';
import PokeListView from './PokeListView.js';

async function test() {
  const cont = document.getElementById('cont');
  const pokeService = new PokeApiService();
  const cardsUi = [];
  const pokeData = await pokeService.getSomePokemonData(125, 30);
  pokeData.forEach((element) => {
    cardsUi.push(element.view.ui);
  });

  const presenter = {
    cardsUi,
  };

  const view = new PokeListView(presenter);

  cont.appendChild(view.ui);
}
export default test;
