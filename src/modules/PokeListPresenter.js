import PokeApiService from './PokeApiService.js';
import PokeListView from './PokeListView.js';

class PokeListPresenter {
  #model;

  #view;

  constructor() {
    this.#model = new PokeApiService();
    this.#view = new PokeListView(this);
  }

  get view() {
    return this.#view;
  }

  get cardsUi() {
    return (async () => {
      const cards = [];
      const pokeData = await this.#model.getSomePokemonData(1, 200);

      pokeData.forEach((element) => {
        cards.push(element.view.ui);
      });

      return cards;
    })();
  }
}
export default PokeListPresenter;