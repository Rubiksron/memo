'use strict';

const client = require('./Client');

function deleteAccount(request, response) {
  var id = request.params.id;
  console.log('delete id: ', id);
  const SQL = 'DELETE FROM users WHERE id=$1;';
  const VALUES = [id];

  client.query(SQL, VALUES)
    .then(() => console.log(`Deleted User id: ${id}`))
    .then(() => {
      const SQL2 = 'DELETE FROM memos WHERE id=$1;';
      client.query(SQL2, VALUES)
        .then(() => response.redirect('/logout'))
        .catch(err => console.log('err: ', err));
    })
    .catch(err => console.log('ya done goofed, deleteMemo: ', err));
}

module.exports = deleteAccount;