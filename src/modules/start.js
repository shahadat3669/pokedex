import PokeListPresenter from './PokeListPresenter.js';

async function start() {
  const cont = document.getElementById('cont');
  const presenter = new PokeListPresenter();
  cont.appendChild(await presenter.view.ui);
}
export default start;
