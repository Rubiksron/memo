'use strict';

const client = require('./Client');

function deleteMemo(request, response) {
  let id = request.params.id;
  const SQL = 'DELETE FROM memos WHERE id=$1;';
  const VALUES = [id];

  client.query(SQL, VALUES)
    .then(() => response.redirect('/getMemos'))
    .catch(err => console.log('ya done goofed: ', err));
}

module.exports = deleteMemo;
