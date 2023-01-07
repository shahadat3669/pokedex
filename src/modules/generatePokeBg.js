const generateColor = async (type) => {
  let color;
  switch (type) {
    case 'grass':
      color = '#5fbd58';
      break;
    case 'bug':
      color = '#92bc2c';
      break;
    case 'dark':
      color = '#595761';
      break;
    case 'dragon':
      color = '#0c69c8';
      break;
    case 'electric':
      color = '#f2d94e';
      break;
    case 'fairy':
      color = '#ee90e6';
      break;
    case 'fighting':
      color = '#d3425f';
      break;
    case 'fire':
      color = '#dc872f';
      break;
    case 'flying':
      color = '#a1bbec';
      break;
    case 'ground':
      color = '#da7c4d';
      break;
    case 'ghost':
      color = '#5f6dbc';
      break;
    case 'psychic':
      color = '#75d0c1';
      break;
    case 'steel':
      color = '#5695a3';
      break;
    case 'water':
      color = '#539ddf';
      break;
    case 'poison':
      color = '#b763cf';
      break;
    case 'normal':
      color = '#a0a29f';
      break;
    case 'rock':
      color = '#a38c21';
      break;
    case 'ice':
      color = '#75d0c1';
      break;

    default:
      color = '#fff';
      break;
  }
  return color;
};

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
  const result = await `background: linear-gradient(${startColor}, ${endColor})`;
  return result;
};

export default generatePokeBg;
