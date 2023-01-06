/**
 * @jest-environment jsdom
 */
import AllPokesCounter from '../src/modules/AllPokesCounter.js';

describe('AllPokesCounter', () => {
  test('pokeCounter.innerText is equals to 15', () => {
    // Arrange
    document.body.innerHTML = '<div><div id="poke-cards-cont"></div><span id="poke-counter"></span></div>';
    const pokeCont = document.getElementById('poke-cards-cont');
    let htmlCards = '';
    for (let i = 0; i < 15; i += 1) {
      htmlCards += '<div class="poke-card"></div>';
    }
    pokeCont.innerHTML = htmlCards;
    
    const test = document.getElementById('poke-counter');


    // Action
    AllPokesCounter();
    console.log(test.innerHTML);
    // Assert
    expect(test.innerHTML).toStrictEqual('(15)');
  });

  test('pokeCounter.innerText is equals to 0', () => {
    // Arrange
    document.body.innerHTML = '<div><div id="poke-cards-cont"></div><span id="poke-counter"></span></div>';    
    const test = document.getElementById('poke-counter');

    // Action
    AllPokesCounter();
    console.log(test.innerHTML);

    // Assert
    expect(test.innerHTML).toStrictEqual('(0)');
  });
});