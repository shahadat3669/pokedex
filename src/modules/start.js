import AllPokesCounter from './AllPokesCounter.js';
import PokeListPresenter from './PokeListPresenter.js';

async function start() {
  const cont = document.getElementById('cont');
  const presenter = new PokeListPresenter();
  cont.appendChild(await presenter.view.ui);
  AllPokesCounter();
}
export default start;
