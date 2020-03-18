'use strict';

const client = require('./Client');

function createMemo(request, response) {
  var originOfRequest = request.headers.referer;
  const memo = request.body.memo.toLowerCase();
  const choreType = request.body.choreType.toLowerCase();
  const VALUES = [memo, choreType];
  const SQL = 'INSERT INTO memos(memo, chore_type) VALUES($1, $2) RETURNING id;';

  client.query(SQL, VALUES)
    .then(() => response.redirect(`${originOfRequest}`))
    .catch(err => console.log('ya done goofed, createMemo: ',err));
}

module.exports = createMemo;
