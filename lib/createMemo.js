'use strict';

const client = require('./Client');

//assign the id of whomever made the memo, to the memo.

function createMemo(request, response) {
  var originOfRequest = request.headers.referer;
  const id = request.body.idInput;
  const memo = request.body.memo.toLowerCase();
  const choreType = request.body.choreType.toLowerCase();
  const VALUES = [id, memo, choreType];
  const SQL = 'INSERT INTO memos(id, memo, chore_type) VALUES($1, $2, $3) RETURNING id;';

  client.query(SQL, VALUES)
    .then((results) => console.log('createMemo - results.rows: ', results.rows))
    .then(() => response.redirect(`${originOfRequest}`))
    .catch(err => console.log('ya done goofed, createMemo: ', err));
}

module.exports = createMemo;
