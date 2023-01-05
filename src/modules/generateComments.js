import getCommentsData from './getPokemonComments.js';

const generateComments = async (pokiId) => {
  const result = await getCommentsData(pokiId);
  let generateHtml = '';

  if (!result.error && result.length > 0) {
    await result.forEach(async (comment, id) => {
      generateHtml += `<li class="comments__item" id=${id}>
          <span class="comment__item-date">${comment.creation_date}</span>
          <span class="comment__item-user">${comment.username}:</span>
          <span class="comment__item-text">${comment.comment}</span>
        </li>`;
    });
  } else {
    generateHtml
      += '<li class="comments__item"><span class="comment__item-user">No comments.</span></li>';
  }
  return generateHtml;
};

export default generateComments;
