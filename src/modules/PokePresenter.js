import InvolvementApiService from './InvolvementApiService.js';
import PokeModel from './PokeModel.js';
import PokeView from './PokeView.js';

class PokePresenter {
  #model;

  #view;

  #gen = 5;

  #likes;

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

  set likes(count) {
    this.#likes = count;
    this.#view.updateLikes(count);
  }

  addLike = async () => {
    InvolvementApiService.postLikeById(this.#model.id);
    this.#likes += 1;
    this.#view.updateLikes(this.likes);
  }
}
export default PokePresenter;