const commentsCounter = async (commentList) => {
  let counter = 0;

  if (!commentList.error) {
    await commentList.forEach(async (comment, index) => {
      counter = index + 1;
    });
  }
  return counter;
};

module.exports = commentsCounter;
