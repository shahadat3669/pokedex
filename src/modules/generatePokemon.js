import generatePokeBg from './generatePokeBg.js';
import getPokemonData from './getPokemonData.js';
import generateComments from './generateComments.js';
import postComment from './postComments.js';

const pokiPopup = document.querySelector('#pokiPopup');

const generateTypesHtml = async (types) => {
  let generateHtml = '';

  if (types.length > 0) {
    await types.forEach(async (type) => {
      generateHtml += `<div tooltip="${type.type.name}">
    <img class="type-img" src="./assets/${type.type.name}.svg" alt="${type.type.name}" />
  </div>`;
    });
  }

  return generateHtml;
};

const generateStatsHtml = (stats) => {
  let generateHtml = '';
  if (stats.length > 0) {
    stats.forEach((stat, id) => {
      generateHtml += `<div class="progress" id="${id}">
      <div class="progress__title">${stat.stat.name}</div>
      <div class="progress__bar-container">
        <div
          tooltip="${stat.base_stat}%"
          class="progress__bar"
          data-percent="${stat.base_stat}"
          style="width: ${stat.base_stat}%"
        ></div>
      </div>
    </div>`;
    });
  }
  return generateHtml;
};

const generateAbilitiesHtml = (abilities) => {
  let generateHtml = '';
  if (abilities.length > 0) {
    abilities.forEach((ability) => {
      generateHtml += `<p class="ability">${ability.ability.name}</p>`;
    });
  }
  return generateHtml;
};

const generatePokemon = async (pokiId) => {
  const result = await getPokemonData(pokiId);
  const {
    abilities, height, weight, id, name, stats, types, sprites,
  } = result;
  const img = sprites.other.dream_world.front_default;
  const typesHtml = await generateTypesHtml(types);
  const generatedPokeBg = await generatePokeBg(types);
  const abilitiesHtml = await generateAbilitiesHtml(abilities);
  const statsHtml = await generateStatsHtml(stats);
  const comments = await generateComments(pokiId);

  const generatedPokemonHtml = await `<div class="popup__container" id= ${id}>
    <p class="pokemon-id">#${pokiId}</p>
    <button class="close">&times;</button>
    <div class="popup__img-container" style="${generatedPokeBg}">
      <img class="popup__img" src="${img}" alt="${name}" />
      <img src="./assets/oval.svg" alt="" class="popup__img-bg" />
    </div>
    <div class="popup__content">
      <div class="popup__content-top">
        <h2 class="title-secondary">${name}</h2>
      </div>
      <div class="types">
        ${typesHtml}
      </div>
      <div class="details-container">
        <div class="container--progress">
          <h4 class="title-4">Base status:</h4>
          ${statsHtml}
        </div>
        <div class="details-right">
          <div class="measerments">
            <h4 class="title-4">Measurements:</h4>
            <p class="measurement">
              <span class="measurement__title">Height : </span> ${height} M
            </p>
            <p class="measurement">
              <span class="measurement__title">weight : </span> ${weight} kg
            </p>
          </div>
          <div class="abilities">
            <h4 class="title-4">Abilities:</h4>
            ${abilitiesHtml}
          </div>
        </div>
      </div>
      <div class="comments">
      ${comments}
    </div>
    <div class="add-comments">
      <h2 class="title-secondary text--center">Add comment</h2>
      <form method="post" class="add-comments__form" id="addNewComment">
        <input
          value="${id}"
          type="text"
          name="item_id"
          class="add-comments__input--hidden"
        />
        <input
          name="username"
          type="text"
          class="add-comments__input"
          placeholder="Your name"
        />
        <textarea
          placeholder="Your insights"
          name="comment"
          cols="2"
          rows="2"
          class="add-comments__input"
        ></textarea>
        <button class="add-comments__btn com-btn poke-btn">Comment</button>
      </form>
    </div>
    </div>
  </div>`;
  pokiPopup.innerHTML = generatedPokemonHtml;
  pokiPopup.style.display = 'block';
  const closeModal = () => {
    pokiPopup.style.display = 'none';
  };

  const newComment = document.querySelector('#addNewComment');
  newComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const itemId = data.get('item_id');
    const username = data.get('username');
    const comment = data.get('comment');
    if (itemId && username && comment) {
      const result = await postComment({
        item_id: itemId,
        username,
        comment,
      });

      if (result === 201) {
        const generatedCommentsHtml = await generateComments(itemId);
        document.querySelector('.comments').innerHTML = generatedCommentsHtml;
        newComment.reset();
      }
    }
  });

  document.querySelector('.close').addEventListener('click', closeModal);
};

export default generatePokemon;
