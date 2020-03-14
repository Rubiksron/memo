'use strict';

const client = require('./Client');

function createMemo(request, response) {
  const memo = request.body.memo.toLowerCase();
  const choreType = request.body.choreType.toLowerCase();
  const VALUES = [memo, choreType];
  const SQL = 'INSERT INTO memos(memo, chore_type) VALUES($1, $2) RETURNING id;';

  client.query(SQL, VALUES)
    .then(() => response.redirect('/'))
    .catch(err => console.log('ya done goofed: ',err));
}

module.exports = createMemo;
