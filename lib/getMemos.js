'use strict';

const client = require('./Client');

function getMemos(request, response) {
  const userId = request.body.idInput;
  console.log('userId: ', userId);
  // const userId = 7;
  // const SQL = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${userId};`;
  const SQL = 'SELECT * FROM memos ORDER BY chore_type DESC;';
  client.query(SQL)
    .then(results => {
      response.render('./index', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getMemos: ', err));
}

module.exports = getMemos;
