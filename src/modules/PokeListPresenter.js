import PokeApiService from './PokeApiService.js';
import InvolvementApiService from './InvolvementApiService.js';
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
      const likes = await InvolvementApiService.getAllLikes();
      const cards = [];
      const pokeData = await this.#model.getSomePokemonData(1, 9);

      let lik;
      pokeData.forEach((element) => {
        lik = likes.find((item) => item.item_id === element.id);
        element.likes = (lik !== undefined) ? lik.likes : 0;
        cards.push(element.view.ui);
      });

      return cards;
    })();
  }
}
export default PokeListPresenter;