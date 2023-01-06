import commentsCounter from '../src/modules/commentsCounter.js';

// testing for Add function
// Arrange
const addMessage = {
  input_0: 'Return 0 when there is no comment',
  input_10: 'Return 10 when input length is 10',
};

const noCommentJson = {
  error: { status: 400, message: "'item_id' not found." },
};

const tenComments = [
  {
    comment: 'first comment',
    creation_date: '2023-01-06',
    username: 'shahadat',
  },
  {
    creation_date: '2023-01-06',
    username: 'Rakib',
    comment: 'second comment',
  },
  {
    username: 'Monir',
    creation_date: '2023-01-06',
    comment: 'Third comment',
  },
  {
    comment: 'Fourth comment',
    creation_date: '2023-01-06',
    username: 'Rahul',
  },
  {
    username: 'Tohin',
    creation_date: '2023-01-06',
    comment: 'Fifth comment',
  },
  {
    creation_date: '2023-01-06',
    comment: 'Sixth comment',
    username: 'Kaium',
  },
  {
    username: 'Asique',
    creation_date: '2023-01-06',
    comment: 'Seventh comment',
  },
  {
    username: 'Asraful',
    creation_date: '2023-01-06',
    comment: 'Eight comment',
  },
  {
    creation_date: '2023-01-06',
    comment: 'Ninth comment',
    username: 'Sufol',
  },
  {
    comment: 'Tenth comment',
    username: 'Faruk',
    creation_date: '2023-01-06',
  },
];
