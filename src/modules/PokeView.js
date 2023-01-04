class PokeView {
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
    const pokeCard = document.createElement('div');
    pokeCard.setAttribute('class', 'poke-card');
    const div = document.createElement('div');
    div.setAttribute('class', 'poke-show');

    const img = document.createElement('img');
    img.setAttribute('class', 'poke-img');
    img.src = this.#presenter.imgLink;
    div.appendChild(img);

    let p = document.createElement('p');
    p.setAttribute('class', 'poke-id');
    p.innerText = this.#presenter.id;
    div.appendChild(p);

    p = document.createElement('p');
    p.setAttribute('class', 'poke-gen');
    p.innerText = this.#presenter.gen;
    div.appendChild(p);
    pokeCard.appendChild(div);

    return pokeCard;
  }
}
export default PokeView;