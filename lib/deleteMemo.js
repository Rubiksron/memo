'use strict';

const client = require('./Client');

function deleteMemo(request, response) {
  const originOfRequest = request.headers.referer;
  const memo_id = request.params.memo_id;
  const SQL = 'DELETE FROM memos WHERE memo_id=$1;';
  const VALUES = [memo_id];

  client.query(SQL, VALUES)
    .then(() => response.redirect(`${originOfRequest}`))
    .catch(err => console.log('ya done goofed, deleteMemo: ', err));
}

module.exports = deleteMemo;
