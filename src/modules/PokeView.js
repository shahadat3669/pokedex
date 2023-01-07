import heartIcon from '../assets/heart-icon.svg';
import ovalBg from '../assets/oval.svg';
import generatePokemon from './generatePokemon.js';

class PokeView {
  #presenter;

  #ui;

  #likes;

  #colors = {
    grass: '#5fbd58',
    bug: '#92bc2c',
    dark: '#595761',
    dragon: '#0c69c8',
    electric: '#f2d94e',
    fairy: '#ee90e6',
    fighting: '#d3425f',
    fire: '#dc872f',
    flying: '#a1bbec',
    ground: '#da7c4d',
    ghost: '#5f6dbc',
    psychic: '#75d0c1',
    steel: '#5695a3',
    water: '#539ddf',
    poison: '#b763cf',
    normal: '#a0a29f',
    rock: '#a38c21',
    ice: '#75d0c1',
  }

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
    this.updateLikes();
  }

  get ui() {
    return this.#ui;
  }

  updateLikes = (newCount) => {
    this.#likes.innerText = `${newCount} likes`;
  }

  getBgColor = () => {
    let startColor = '';
    let endColor = '';

    if (this.#presenter.types.length === 2) {
      startColor = this.#colors[this.#presenter.types[0]];

      endColor = this.#colors[this.#presenter.types[1]];
    } else if (this.#presenter.types.length === 1) {
      startColor = this.#colors[this.#presenter.types[0]];
      endColor = startColor;
    } else {
      startColor = '#fff';
      endColor = '#fff';
    }
    return `background-image: linear-gradient(${startColor}, ${endColor})`;
  }

  #createDOMElements = () => {
    const pokeCard = document.createElement('div');
    pokeCard.setAttribute('class', 'poke-card');

    let div = document.createElement('div');
    div.setAttribute('class', 'poke-show');
    div.style = this.getBgColor();

    let img = document.createElement('img');
    img.setAttribute('class', 'poke-img');
    img.setAttribute('loading', 'lazy');
    img.src = this.#presenter.imgLink;
    div.appendChild(img);

    img = document.createElement('img');
    img.setAttribute('class', 'poke-show-oval');
    img.setAttribute('loading', 'lazy');
    img.src = ovalBg;
    div.appendChild(img);

    let p = document.createElement('p');
    p.setAttribute('class', 'poke-id');
    p.innerText = this.#presenter.id;
    div.appendChild(p);
    pokeCard.appendChild(div);

    // Pokemon details
    div = document.createElement('div');
    div.setAttribute('class', 'poke-dets');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'poke-data');

    p = document.createElement('p');
    p.setAttribute('class', 'poke-name');
    p.innerText = this.#presenter.name;
    div2.appendChild(p);

    let typeIcon;
    const typeIcons = document.createElement('div');
    typeIcons.setAttribute('class', 'poke-types');
    this.#presenter.types.forEach((type) => {
      typeIcon = document.createElement('img');
      typeIcon.setAttribute('class', 'type-img');
      typeIcon.setAttribute('title', `${type}`);
      typeIcon.src = `./assets/${type}.svg`;
      div2.appendChild(typeIcon);
    });
    div.appendChild(div2);
    pokeCard.appendChild(div);

    div2 = document.createElement('div');
    div2.setAttribute('class', 'poke-likes');
    const iconCont = document.createElement('button');
    iconCont.setAttribute('class', 'heart-icon-cont');
    iconCont.setAttribute('type', 'button');

    img = document.createElement('img');
    img.setAttribute('class', 'like-icon');
    img.src = heartIcon;
    img.addEventListener('click', this.#presenter.addLike);
    iconCont.appendChild(img);
    div2.appendChild(iconCont);

    this.#likes = document.createElement('p');
    this.#likes.setAttribute('class', 'likes-count');
    this.#likes.innerText = '0 likes';
    div2.appendChild(this.#likes);
    div.appendChild(div2);
    pokeCard.appendChild(div);

    // Buttons
    div = document.createElement('div');
    div.setAttribute('class', 'poke-btns');
    let btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'com-btn poke-btn');
    let span = document.createElement('span');
    span.innerText = 'COMMENTS';
    btn.appendChild(span);
    btn.addEventListener('click', async () => {
      await generatePokemon(this.#presenter.id);
    });
    div.appendChild(btn);
    btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'res-btn poke-btn');
    span = document.createElement('span');
    span.innerText = 'RESERVATIONS';
    btn.appendChild(span);
    btn.addEventListener('click', this.#presenter.openReservations);
    div.appendChild(btn);
    pokeCard.appendChild(div);

    return pokeCard;
  };
}
export default PokeView;
