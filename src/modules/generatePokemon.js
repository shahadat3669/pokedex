import generateColor from './generatePokeBg.js';
import getPokemonData from './getPokemonData.js';

const pokiPopup = document.querySelector('#pokiPopup');

const generatePokeBg = async (types) => {
  let startColor = '';
  let endColor = '';
  if (types.length === 2) {
    startColor = await generateColor(types[0].type.name);
    endColor = await generateColor(types[1].type.name);
  } else if (types.length === 1) {
    startColor = await generateColor(types[0].type.name);
    endColor = startColor;
  } else {
    startColor = '#fff';
    endColor = '#fff';
  }
  const result =
    await `background: linear-gradient(${startColor}, ${endColor})`;
  return result;
};

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

const generatePokemon = async () => {
  const result = await getPokemonData();
  const { abilities, height, weight, id, name, stats, types, sprites } = result;
  const img = sprites.other.dream_world.front_default;
  const typesHtml = await generateTypesHtml(types);
  const generatedPokeBg = await generatePokeBg(types);
  const abilitiesHtml = await generateAbilitiesHtml(abilities);
  const statsHtml = await generateStatsHtml(stats);
};

export default generatePokemon;
