import PokeModel from './PokeModel.js';
import PokeView from './PokeView.js';

class PokePresenter {
  #model;

  #view;

  #gen = 5;

  #likes =3;

  constructor(id, name, imgLink, types) {
    this.#model = new PokeModel(id, name, imgLink, types);
    this.#view = new PokeView(this);
  }

  get view() {
    return this.#view;
  }

  get id() {
    return this.#model.id;
  }

  get imgLink() {
    return this.#model.imgLink;
  }

  get gen() {
    return this.#gen;
  }

  get name() {
    return this.#model.name;
  }

  get types() {
    return this.#model.types;
  }

  get likes() {
    return this.#likes;
  }
}
export default PokePresenter;