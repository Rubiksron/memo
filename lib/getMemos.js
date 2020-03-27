'use strict';

const client = require('./Client');

function getMemos(request, response) {
  console.log('top - getMemos++++++++++++++');

  //first get the user id, then query and return that users memos
  const userId = 7;
  const SQL = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${userId};`;
  // const SQL = 'SELECT * FROM memos ORDER BY chore_type DESC;';
  client.query(SQL)
    .then(results => {
      console.log('bottom - getMemos++++++++++++++');
      response.render('./index', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getMemos: ', err));
}

module.exports = getMemos;
