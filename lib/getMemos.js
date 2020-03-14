'use strict';

const client = require('./Client');

function getMemos(request, response) {
  let SQL = 'SELECT * FROM memos ORDER BY chore_type ASC;';
  client.query(SQL)
    .then(results => {
      response.render('./index', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}

module.exports = getMemos;
