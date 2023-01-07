const getPokemonData = async (pokiId) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokiId}`;
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  } catch (err) {
    throw new Error(
      `There was the following problem: ${err} while fetching ${endpoint}`,
    );
  }
};

export default getPokemonData;
