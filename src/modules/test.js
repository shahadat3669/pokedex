import PokeApiService from './PokeApiService.js';

async function test() {
  const cont = document.getElementById('poke-cards-cont');
  const pokeService = new PokeApiService();
  const pokeData = await pokeService.getSomePokemonData(100, 20);
  pokeData.forEach((element) => {
    const tagid = document.createElement('p');
    tagid.innerText = element.id;
    cont.appendChild(tagid);
    const tagname = document.createElement('h1');
    tagname.innerText = element.name;
    cont.appendChild(tagname);
    const tagimg = document.createElement('img');
    tagimg.src = element.imgLink;
    cont.appendChild(tagimg);
    const tagtype = document.createElement('p');
    tagtype.innerText = element.types;
    cont.appendChild(tagtype);
  });
}
export default test;
