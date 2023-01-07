class PokeListView {
  #presenter;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #createDOMElements = async () => {
    const pokeList = document.createElement('div');
    pokeList.setAttribute('class', 'poke-cards-cont');
    const list = await this.#presenter.cardsUi;

    list.forEach((cardUi) => {
      pokeList.appendChild(cardUi);
    });

    return pokeList;
  }
}
export default PokeListView;