const commentsCounter = (commentList) => {
  let counter = 0;

  if (!commentList.error) {
    commentList.forEach((comment, index) => {
      counter = index + 1;
    });
  }
  return counter;
};

module.exports = commentsCounter;
