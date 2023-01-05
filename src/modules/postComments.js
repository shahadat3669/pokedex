const postComment = async (data) => {
  const endpoint =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5KlkgNesq7R7nP80GFWz/comments';
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.status;
  } catch (err) {
    throw new Error(
      `There was the following problem: ${err} while fetching ${endpoint}`,
    );
  }
};

export default postComment;
