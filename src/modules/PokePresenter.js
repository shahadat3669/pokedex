import InvolvementApiService from './InvolvementApiService.js';
import PokeModel from './PokeModel.js';
import PokeView from './PokeView.js';

class PokePresenter {
  #model;

  #view;

  #likes;

  constructor(id, name, imgLink, types) {
    this.#model = new PokeModel(id, name, imgLink, types);
    this.#view = new PokeView(this);
    this.#likes = 0;
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
    const response = await InvolvementApiService.postLikeById(this.#model.id);

    if (response.status === 201) {
      this.#likes += 1;
      this.#view.updateLikes(this.#likes);
    }
  }
}
export default PokePresenter;