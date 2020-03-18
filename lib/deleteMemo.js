'use strict';

const client = require('./Client');

function deleteMemo(request, response) {
  var originOfRequest = request.headers.referer;

  let id = request.params.id;
  const SQL = 'DELETE FROM memos WHERE id=$1;';
  const VALUES = [id];

  client.query(SQL, VALUES)
    .then(() => response.redirect(`${originOfRequest}`))
    .catch(err => console.log('ya done goofed, deleteMemo: ', err));
}

module.exports = deleteMemo;
