const getCommentsData = async (pokiId = 0) => {
  const endpoint = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5KlkgNesq7R7nP80GFWz/comments?item_id=${pokiId}`;
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  } catch (err) {
    throw new Error(
      `There was the following problem: ${err} while fetching ${endpoint}`,
    );
  }
};

export default getCommentsData;
