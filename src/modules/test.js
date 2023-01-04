import PokeApiService from './PokeApiService.js';
import PokeView from './PokeView.js';

async function test() {
  const cont = document.getElementById('poke-cards-cont');
  const pokeService = new PokeApiService();
  const pokeData = await pokeService.getSomePokemonData(125, 30);
  let presenter;
  let view;

  pokeData.forEach((element) => {
    presenter = {
      id: element.id,
      imgLink: element.imgLink,
      gen: 5,
      name: element.name,
      types: element.types,
      likes: 3,
    };
    view = new PokeView(presenter);
    cont.appendChild(view.ui);
  });
}
export default test;
