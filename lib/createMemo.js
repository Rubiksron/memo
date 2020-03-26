'use strict';

const client = require('./Client');

//assign the id of whomever made the memo, to the memo. Yep, yep, yep!
//eventually i will want to add in another entry to the values, id, and also in the values
function createMemo(request, response) {
  
  var originOfRequest = request.headers.referer;
  const memo = request.body.memo.toLowerCase();
  const choreType = request.body.choreType.toLowerCase();
  const id = request.body.idInput;

  console.log('id: ', id);
  console.log('memo: ', memo);
  console.log('choreType: ', choreType);

  const VALUES = [id, memo, choreType];
  const SQL = 'INSERT INTO memos(id, memo, chore_type) VALUES($1, $2, $3) RETURNING id;';

  client.query(SQL, VALUES)
    // .then((results) => console.log('results: ', results))
    .then(() => response.redirect(`${originOfRequest}`))
    .catch(err => console.log('ya done goofed, createMemo: ', err));
}

module.exports = createMemo;
