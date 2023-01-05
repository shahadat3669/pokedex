const postComment = async (data) => {
  const endpoint =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5KlkgNesq7R7nP80GFWz/comments';
  try {
    const response = await fetch(endpoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  } catch (err) {
    throw new Error(
      `There was the following problem: ${err} while fetching ${endpoint}`,
    );
  }
};

export default postComment;
