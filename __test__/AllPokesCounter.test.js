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

    // Action
    AllPokesCounter();

    // Assert
    const counter = document.getElementById('poke-counter');
    expect(counter.innerHTML).toStrictEqual('(15)');
  });

  test('pokeCounter.innerText is equals to 0', () => {
    // Arrange
    document.body.innerHTML = '<div><div id="poke-cards-cont"></div><span id="poke-counter"></span></div>';

    // Action
    AllPokesCounter();

    // Assert
    const counter2 = document.getElementById('poke-counter');
    expect(counter2.innerHTML).toStrictEqual('(0)');
  });
});