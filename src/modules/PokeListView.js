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

  #createDOMElements = () => {
    const pokeList = document.createElement('div');
    pokeList.setAttribute('class', 'poke-cards-cont');
    this.#presenter.cardsUi.forEach((cardUi) => {
      pokeList.appendChild(cardUi);
    });

    return pokeList;
  }
}
export default PokeListView;