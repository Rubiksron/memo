'use strict';

const client = require('./Client');

//assign the id of whomever made the memo, to the memo. Yep, yep, yep!

function createMemo(request, response) {
  
  var originOfRequest = request.headers.referer;
  const memo = request.body.memo.toLowerCase();
  const choreType = request.body.choreType.toLowerCase();

  console.log('request.body.idInput: ', request.body.idInput);
  console.log('memo: ', memo);
  console.log('choreType: ', choreType);

  const VALUES = [memo, choreType];
  const SQL = 'INSERT INTO memos(memo, chore_type) VALUES($1, $2) RETURNING id;';

  client.query(SQL, VALUES)
    // .then((results) => console.log('results: ', results))
    .then(() => response.redirect(`${originOfRequest}`))
    .catch(err => console.log('ya done goofed, createMemo: ', err));
}

module.exports = createMemo;
