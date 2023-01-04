import PokeApiService from './PokeApiService.js';
import PokeView from './PokeView.js';

async function test() {
  const cont = document.getElementById('poke-cards-cont');
  const pokeService = new PokeApiService();
  const pokeData = await pokeService.getSomePokemonData(25, 20);
  let presenter;
  let view;

  pokeData.forEach((element) => {
    presenter = {
      id: element.id,
      imgLink: element.imgLink,
      gen: 5,
    };
    view = new PokeView(presenter);
    cont.appendChild(view.ui);
  });
}
export default test;
