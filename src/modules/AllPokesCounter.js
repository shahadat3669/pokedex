function AllPokesCounter() {
  const pokeCount = document.getElementsByClassName('poke-card').length;
  const pokeCountText = document.getElementById('poke-counter');
  pokeCountText.innerHTML = `(${pokeCount})`;
}
export default AllPokesCounter;