'use strict';

const client = require('./Client');

function createMemo(request, response) {  
  var originOfRequest = request.headers.referer;
  const memo = request.body.memo.toLowerCase();
  const choreType = request.body.choreType.toLowerCase();
  const id = request.body.idInput;

  console.log('memo: ', memo);
  console.log('choreType: ', choreType);
  console.log('id: ', id);

  const VALUES = [id, memo, choreType];
  const SQL = 'INSERT INTO memos(id, memo, chore_type) VALUES($1, $2, $3) RETURNING id, memo, chore_type, memo_id;';

  client.query(SQL, VALUES)
    .then(() => response.redirect(`${originOfRequest}`))
    .catch(err => console.log('ya done goofed, createMemo: ', err));
}

module.exports = createMemo;
