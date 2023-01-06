import commentsCounter from './commentsCounter.js';
import getCommentsData from './getPokemonComments.js';

const generateComments = async (pokiId) => {
  const result = await getCommentsData(pokiId);
  let generateHtml = '';

  const totalComments = await commentsCounter(result);

  if (!result.error && result.length > 0) {
    await result.forEach(async (comment, id) => {
      generateHtml += `<li class="comments__item" id=${id}>
          <span class="comment__item-date">${comment.creation_date}</span>
          <span class="comment__item-user">${comment.username}:</span>
          <span class="comment__item-text">${comment.comment}</span>
        </li>`;
    });
  } else {
    generateHtml +=
      '<li class="comments__item"><span class="comment__item-user">No comments.</span></li>';
  }
  generateHtml = `<h2 class="title-secondary">Comments (${totalComments})</h2>
  <ul class="comments__list">
   ${generateHtml}
  </ul>`;
  return generateHtml;
};

export default generateComments;
